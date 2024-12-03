import './App.css'
import Tasklist from './Components/Tasklist/Tasklist'
import Tasks from './Components/Tasks/Tasks'
function App() {
  return (
    <div>
      <Tasklist Tasks={Tasks}/>
    </div>
  )
}

export default App
