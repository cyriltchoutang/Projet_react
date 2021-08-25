
import React, {useContext} from 'react' // On importe le context grâce à Use
import './Content.css'
import BtnToggle from '../BtnToggle/BtnToggle' //on importe le toggle dans le content, pour ensuite importe tout dans App
import {ThemeContext} from '../Context/ThemeContext' // On importe Themecontext


export default function Content() {
   const {theme} = useContext(ThemeContext) // destructuring de theme depuis themecontext. // UseContext permet d'utiliser ThemeContext depuis UseContext
   console.log(theme)
   console.log('content')
    return (
        <div className = "container">
            <BtnToggle/>
            <h1>Lorem ipsum</h1>
            <p className="content-txt">LZZZZZZZZ</p>
            
        </div>
    )
}
