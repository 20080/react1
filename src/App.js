import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import Footer from "./components/Footer"
import About from "./components/About"
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom"
import { useState, useEffect } from 'react'
function App() {
  const [tasks, setTasks] = useState([])


  //it is function which starts at beginning
  useEffect(() => {

    const getTasks = async () => {
      const getTasksFromServer = await fetchTasks()
      setTasks(getTasksFromServer)
    }
    getTasks()
  }, [])

  //fetching from backend

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()
    return data
  }

  const fetchTaskReminder = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  const [showAddTask, setShowAddTask] = useState(false)

  //delete task // async it for when working on backend // dont do https mistake

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method: 'DELETE',
      })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder//important
  const toggleReminder = async (id) => {

    const taskToToggle = await fetchTaskReminder(id)
    const updatedTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder
    }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatedTask),
    })

    const data = await res.json()
    //!task to !data
    setTasks(
      tasks.map((task) =>
        task.id === id ? {
          ...task, reminder:
            data.reminder
        } : task
      )
    )
  }

  //Add task //backend async

  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/tasks/', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])


    //for frontEnd end testing // backend Automatically provides ID primary key i guess
    // const id  = Math.floor(Math.random()*10000)+1
    // const newTask = {id,...task}
    // setTasks([...tasks,newTask])
  }

  const tex = !showAddTask && "No tasks found click add buton to get started"
  //&& is shorter way of doing ternery
  return (

    <Router>

      <div className="container">
        <Header onAdd={() => setShowAddTask
          (!showAddTask)} showAdd={showAddTask} />





        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && < AddTask onAdd={addTask} />}
            {(tasks.length > 0) ? <Tasks tasks={tasks}
              onDelete={deleteTask} onToggle={toggleReminder} /> :
              tex}

          </>
        )} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
