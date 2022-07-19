import React, { useState} from 'react'
import './LeftWindow.css'

import check from '../svg/check.svg'

let tasks = ['Dashboard Design Implementation', 'Create a userflow', 'Application Implementation', 'Create a dashboard design',
'Create a Web Application Design', 'Interactive Design']
let statuslist = ['Approved', 'In Progress', 'In Review']
let statuses = ['Approved', 'In Progress', 'In Review', 'In Progress', 'Approved', 'In Review']

const LeftWindow = () => {
    let [chosen, setChosen] = useState(0)

    let [selectedTasks, setSelectedTasks] = useState([])
    

    const updateTask = (task) => {
        if (selectedTasks.includes(task)){
            setSelectedTasks((prev) => {
                return prev.filter((item) => item !== task)
            })
        }
        else {
            setSelectedTasks((prev) => {
                return [...prev, task]
            })
        }
    }
    
  return (
    <div className='LeftWindow_main'>
        <h1 className='LeftWindow_title'>Today Tasks</h1>
        <div className='LeftWindow_tabs'>
            <h1 className={`${chosen === 1 && 'chosen'}`} onClick={() => setChosen(1)}>All</h1>
            <h1 className={`${chosen === 2 && 'chosen'}`} onClick={() => setChosen(2)}>Important</h1>
            <h1 className={`${chosen === 3 && 'chosen'}`} onClick={() => setChosen(3)}>Notes</h1>
            <h1 className={`${chosen === 4 && 'chosen'}`} onClick={() => setChosen(4)}>Links</h1>
        </div>
        <div className='LeftWindow_tasks'>
            {tasks.map((task, n) => {
                return <div className='task' key={task}>
                        <div className='task-holder' onClick={() => updateTask(task)}>
                            <div className={`checkbox ${selectedTasks.includes(task) && 'checked'}`}>
                                {selectedTasks.includes(task) && <img src={check} alt=''></img>}
                            </div>
                            <h2>{task}</h2>
                        </div>
                        <h2 className={`status s-${statuslist.findIndex((status) => status === statuses[n])}`}>{statuses[n]}</h2>
                    </div>
            })}
        </div>
        <h1 className='LeftWindow_title'>Upcoming Tasks</h1>
        <div className='LeftWindow_tasks'>
            {tasks.map((task, n) => {
                return <div className='task' key={task}>
                        <div className='task-holder' onClick={() => updateTask(task)}>
                            <div className={`checkbox ${selectedTasks.includes(task) && 'checked'}`}>
                                {selectedTasks.includes(task) && <img src={check} alt=''></img>}
                            </div>
                            <h2>{task}</h2>
                        </div>
                        <h2 className='status s-4'>Waiting</h2>
                    </div>
            })}
        </div>
    </div>
  )
}

export default LeftWindow