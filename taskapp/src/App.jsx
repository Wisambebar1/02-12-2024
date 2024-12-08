import { useContext } from 'react'
import './App.css'
import Addtaskform from './Components/Addtaskform/Addtaskform'
import { AppContextProvider} from './Components/Appcontext/Appcontext'
import appContext from "./Components/Appcontext/Appcontext"
function App() {
  let {theme,setTheme}=useContext(appContext)
  const handleTheme=()=>{
    if(theme==="grey"){
      setTheme("white")
    }
    else{
      setTheme("grey")
    }
  }
  return (
    <div style={{backgroundColor:theme}}>
        <Addtaskform/>
        <button onClick={handleTheme}>theme change</button>
    </div>
  )
}

export default App
