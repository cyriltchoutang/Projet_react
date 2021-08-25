import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth); // taille de la largeur de l'ecran

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => { // il intervient quand le composant fini de s'afficher
    
        const changeWidth = () => {
            setLargeur(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }


    }, [])

  return (
    <nav>
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
          <li className="items">Accueil</li>
          <li className="items">Services</li>
          <li className="items">Contact</li>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">BTN</button>
    </nav>
  );
}
