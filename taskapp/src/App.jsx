import { useContext } from 'react'
import './App.css'
import Addtaskform from './Components/Addtaskform/Addtaskform'
import appContext from "./Components/Appcontext/Appcontext"
function App() {
  let {theme,setTheme,handleTheme}=useContext(appContext)
  return (
    <div style={{backgroundColor:theme}}>
        <Addtaskform/>
        <button onClick={handleTheme}>theme change</button>
    </div>
  )
}

export default App
