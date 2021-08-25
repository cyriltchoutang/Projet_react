import React from 'react'
import {useHistory, useParams} from 'react-router-dom'; // useHistory: librairie permettant de naviguer dans notre historique; UseParams: library permettant de recuperer le slug

export default function Projet() {

    const history = useHistory(); // Pour avoir accès à notre historique
   
 
    return (
        <div>
            <h1>PROJET</h1>
            <button
            onClick={() => history.push('/')}> {/* pour revnir à l'accueil par exemple, etant sur une autre page */ }
            GO TO HOME
            </button>
        </div>
    )
}
