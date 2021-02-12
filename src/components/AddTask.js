import {useState} from 'react'

const AddTask = () => {
const [text,setText] = useState('')
const [day,setDay] = useState('')
const [reminder,setReminder] = useState(false)

    return (
        <form className = 'add-form'>
            <div className = 'form-control'>
            <label> Task </label>
            <input type="text" placeholder = "Add your task here"
            value = {text}
            onChange =
            {(e)=>setText(e.target.value)}/>
            </div>
            <div className = 'form-control'>
            <label> Day And Time </label>
            <input type="text" placeholder = "Add Day and time"
            value={day}
             onChange =
             {(e)=>setDay(e.target.value)}/>
            </div>
            <div className = 'form-control form-control-check'>
            <label> reminder </label>

            <input type="checkbox"    
            value={reminder}
             onChange =
             {(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" className='btn btn-block' 
            value='Save Task' name="" id=""/>
            
        </form>
    )
}

export default AddTask
