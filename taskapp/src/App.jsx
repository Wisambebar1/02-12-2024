import './App.css'
import Addtaskform from './Components/Addtaskform/Addtaskform'
import Tasklist from './Components/Tasklist/Tasklist'
import Tasks from './Components/Tasks/Tasks'
function App() {
  return (
    <div>
      <Tasklist Tasks={Tasks}/>
      <Addtaskform/>
    </div>
  )
}

export default App
