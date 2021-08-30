import React, {useRef, useState} from 'react'
import Navbar from "./component/navbar/Navbar"
import "./component/shared.css"
import Main from "./component/main/Main"
import Colors from "./component/Colors"

const App = () => {
    const [theme, setTheme] = useState(Colors.lightThemeColor) // Components Color
    const [revTheme, setRevTheme] = useState(Colors.darkThemeColor) // Opposite Of theme
    const projects = useRef(null)
    const tips = useRef(null)
    const about = useRef(null)
    const changeTheme = () => {
        const isLight = theme === Colors.lightThemeColor;
        setTheme(isLight ? Colors.darkThemeColor : Colors.lightThemeColor)
        setRevTheme(isLight ? Colors.lightThemeColor : Colors.darkThemeColor)
    }
    return (
        <div style={{backgroundColor: theme}}>
            <Navbar backgroundColor={theme} onChangeTheme={changeTheme} textColor={revTheme}
                    projects={projects} tips={tips} about={about}/>

            <Main backgroundColor={theme} revBackgroundColor={revTheme}
                    projects={projects} tips={tips} about={about}/>
        </div>
    )
}

export default App
