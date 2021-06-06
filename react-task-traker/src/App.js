
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import {useState} from 'react'
function App() {
  const [tasks, setTasks] = useState([
        {id:1},
        {id:2},
        {id:3},
  ])


  return (
    <div className="container">
     <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
