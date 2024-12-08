import './App.css'
import Addtaskform from './Components/Addtaskform/Addtaskform'
import { AppContextProvider } from './Components/Appcontext/Appcontext'
function App() {
  return (
    <div>
      <AppContextProvider>
        <Addtaskform/>
      </AppContextProvider>
    </div>
  )
}

export default App
