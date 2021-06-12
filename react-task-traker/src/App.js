import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'
import { useState } from 'react'

function App() {
    const [tasks, setTasks] = useState([{
            id: 1,
            day: 1,
            reminder: true,
            text: 'This is a task'
        },

        {
            id: 2,
            reminder: true,
            text: 'This is a task'
        },
        {
            id: 3,
            reminder: true,
            text: 'This is a task'
        },
    ])

    //Delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    const toggleReminder = (id) => {

        setTasks(tasks.map(task => task.id === id ? {...task,
            reminder:
                !task.reminder
        } : task))
        console.log('remider')

    }

    const addTask = () => {
        console.log('I work');
    }

    return ( <
            div className = "container" >
            <
            Header / >
            <
            AddTask onAdd = { addTask }
            / > {
            tasks.length > 0 ?
            <
            Tasks tasks = { tasks }
            onDelete = { deleteTask }
            onToggle = { toggleReminder }
            /> :
            'No tasks'

        } <
        /div>
);
}

export default App;