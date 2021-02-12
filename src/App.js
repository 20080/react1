import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import {useState} from 'react'
function App() {
  const [tasks,setTasks] = useState(
    [
        { id:'1',
          text:'Doctor appointment',
          day:'jan 1 2022',
          reminder:'false'
        },
        { id:'2',
          text:'appointment for nothing',
          day:'Its just example what you want',
          reminder:'true'
        },
        { id:'3',
          text:'YUP TASK',
          day:'ANY DAY',
          reminder:'true'
        },
        { id:'4',
          text:'Heh I am busy',
          day:'WHat',
          reminder:'false'
        }
        ]
)

const [showAddTask, setShowAddTask] = useState(false) 

//delete task

const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}

//toggle reminder//important
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=>task.id=== id ?
  {...task,reminder: !task.reminder}:task))
}

//Add task 

const addTask = (task)=>{
    const id  = Math.floor(Math.random()*10000)+1
    //console.log(id)
    const newTask = {id,...task}
    setTasks([...tasks,newTask])
}


//&& is shorter way of doing ternery
  return (

    <div className="container">
      <Header onAdd = {()=>setShowAddTask
        (!showAddTask)} showAdd = {showAddTask}  />


      { showAddTask && < AddTask onAdd = {addTask} />}

      {tasks.length>0?<Tasks tasks={tasks} 
      onDelete = {deleteTask} onToggle={toggleReminder} />:"No MF no Tasks u just deleted them all"}
    </div>
    
  );
}

export default App;
