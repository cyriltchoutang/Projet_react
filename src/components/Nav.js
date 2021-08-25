import React from 'react'
import {Link} from "react-router-dom"; //import librairie Pour mettre des liens à nos routes

export default function Nav() {
    return (
        <ul>
            <Link to="/">
            <li>Accueil</li>
            </Link>
            <Link to="/projet">
            <li>Projet</li>
            </Link>
            <Link to="/contact">
            <li>Contact</li>
            </Link>
        </ul>
    )
}
