import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import {useState} from 'react'
function App() {
  const [tasks,setTasks] = useState(
    [
        { id:'1',
          text:'Doctor appointment',
          day:'HEHE',
          reminder:'true'
        },
        { id:'2',
          text:'appointment',
          day:'HEHE',
          reminder:'true'
        },
        { id:'3',
          text:'Doctor ntment',
          day:'HEHE',
          reminder:'true'
        },
        { id:'4',
          text:'tor appointment',
          day:'HEHE',
          reminder:'false'
        }
        ]
)

//delete task

const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}

//toggle reminder//important
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=>task.id=== id ?
  {...task,reminder: !task.reminder}:task))
}

  return (
    <div className="container">
      <Header />
      < AddTask/>
      {tasks.length>0?<Tasks tasks={tasks} 
      onDelete = {deleteTask} onToggle={toggleReminder} />:"No MF no Tasks u just deleted them all"}
    </div>
    
  );
}

export default App;
