
import React, {useContext} from 'react'
import './BtnToggle.css'
import {ThemeContext} from '../Context/ThemeContext'

export default function BtnToggle() {
    console.log('toggle')
    const {toggleTheme} = useContext(ThemeContext)  // on recupere le contexte car on veut l'utiliser après le clic
    return (
        <button onClick = {toggleTheme} className="btn-toggle">Toggle</button>
    )
}
