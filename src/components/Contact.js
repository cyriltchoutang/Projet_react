import React from 'react'
import {useLocation} from 'react-router-dom' //permet de nous renseigner sur la localisation. L'url où on se trouve

export default function Contact() {

    const location = useLocation();

    console.log(location)
    console.log(location.state.txt) // afficher les données

    return (
        <div>
            <h1>{location.state.txt}</h1>
        </div>
    )
}
