import { createContext,useContext,useState} from "react"
const appContext=createContext()
export const AppContextProvider=({children})=>{
    const [theme,setTheme]=useState("light")
    const handleTheme=()=>{
    if(theme==="grey"){
      setTheme("white")
    }
    else{
      setTheme("grey")
    }
  }
    return(
        <appContext.Provider value={{theme,setTheme,handleTheme}}>
            {children}
        </appContext.Provider>
    )
}
export default appContext
