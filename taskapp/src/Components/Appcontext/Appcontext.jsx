import { createContext,useContext,useState} from "react"
const appContext=createContext()
export const AppContextProvider=({children})=>{
    const [theme,setTheme]=useState("light")
    return(
        <appContext.Provider value={{theme,setTheme}}>
            {children}
        </appContext.Provider>
    )
}
export default appContext
