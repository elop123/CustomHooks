import{createContext} from 'react'
import{ useState } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = (props)=>{

//state til at sette darl mode
const[isDarkMode, setIsDarkMode] = useState();

//function til update state
const handleChangeDarkMode = ()=>{
  if(isDarkMode=== true){
    setIsDarkMode(false)
}else{
    setIsDarkMode(true)
}
}

return(
    <ThemeContext.Provider value={{isDarkMode, handleChangeDarkMode}}>
        {props.children}
    </ThemeContext.Provider>
)

}
