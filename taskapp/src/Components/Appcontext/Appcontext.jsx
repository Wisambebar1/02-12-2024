import { createContext,useContext,useState} from "react"
const appContext=createContext()
export const AppContextProvider=({children})=>{
    const [value,setValue]=useState("asd")
    return(
        <appContext.Provider value={{value,setValue}}>
            {children}
        </appContext.Provider>
    )
}
export default appContext
