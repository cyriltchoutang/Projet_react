import React from 'react'
import {Link} from "react-router-dom"

export default function Accueil() {
    return (
        <div>
            <h1>ACCUEIL</h1>
            <Link  /* envoyer des données par url*/
            to={{
                pathname: "/contact",
                state: {
                    txt: "Voilà des données"
                }
            }}
            >aller à la section contact
            </Link> 
        </div>
    )
}

