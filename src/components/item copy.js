import {useState} from 'react' // Importe le state
import img1 from './tree-276014__340.jpg' // importe notre image
function Item(props){
    console.log(props); // retournera ce que le parent lui donne (parent: app.js)
    const [itemState, setItemState] = useState('Item state')
    console.log(itemState);
    return ( //Toujours retourner un bloc (des div) quand on veut plusieurs élément
    <div>
        <h1>{props.number} </h1> 
        <img src={img1} alt="hahaha"/> {/* affichage de l'image */}
        <button onClick={() => props.func(itemState)}>changement</button> {/*Props.func fait reference à func chez le parent */}
    </div> /*etant donné que nous voulons appeler func lorsqu'on qu'on clique sur le bouton, nous sommes obligés de passer par une fonction anonyme { () } car sans ça la fonction func sera exécuté dès qu'on rafraichira la page C'est parce que le state pars de chez l'enfant*/
    )
}
/*function Item({number}){ // destructuring . c'est pour ne pas ecrire props.number à chaque fois
    //console.log(props); // retournera ce que le parent lui donne (parent: app.js)
    return <h1>{number} </h1> // resultat: 10 venant du sate parent
}*/
export default Item;