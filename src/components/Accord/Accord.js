import React, {useState, useRef, useEffect} from 'react'
import './Accord.css'
import Chevron from './chevron.svg'

export default function Accord() {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const toggleState = () => { // bascule
        setToggle(!toggle);
    }

    const refHeight = useRef(); // permet de sélectionner un élément d'ou ref plus bas// il recuperera la hauteur du texte saisi.

    useEffect(() => { // Le but est de recupérer les infos (taille de l'element sélectionner grâce au useRef pour pouvoir exécuter notre condition if ci-dessous qui va reduire le way quand ça sera à 0.)
        
        setHeightEl(`${refHeight.current.scrollHeight}px`) //scrollheight : hauteur de cet élément (partie grise)// L'attribut en lecture seule element.scrollHeight est une mesure de la hauteur du contenu d'un élément qui inclut le contenu débordant et non visible à l'écran.
        console.log(refHeight.current.scrollHeight)
    }, [])


    return (
        <div className="accord">
            
            <div 
            onClick={toggleState}
            className="accord-visible">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <img src={Chevron} alt="chevron down"/>
            </div>

            <div 
            ref={refHeight}  //selection de l'élément
            className={toggle ? 'accord-toggle animated' : 'accord-toggle'}
            style={{height: toggle ? `${heightEl}` : "0px"}} //c'est la hauteur du texte captée plus haut avec les use ref// si c'est true envoie la hauteur de l'element séclectionné (heightEl), 0, la reduire
            >
                <p
                aria-hidden={toggle ? "true" : "false"} // caché le texte en arière plan grâce à aria-hidden pourque les lecteurs d'ecran ne voient pas
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, debitis? Aut quia tempora perspiciatis at fuga dignissimos minus, quo laborum? Nemo sunt voluptas eligendi ullam saepe odio enim suscipit aut?
                </p>
            </div>
        </div>
    )
}
