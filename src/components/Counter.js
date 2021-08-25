
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux' // Hook redux qui permet d'avoir accès à nos données// Ce hook renvoie une référence à la dispatchfonction depuis le magasin Redux. Vous pouvez l'utiliser pour envoyer des actions au besoin.
import {getCatImg} from '../redux/Reducers/dataImgReducer' // importe notre fonction getcatImg
// On veut afficher le state situé dans counterReducer dans counter.

export default function Counter() {

    //const count = useSelector(state => state.count) //Il permet de nous connecter à notre store et d'utiliser directement le state. // On a notre fonction callbak entre parenthese, qui va nous retourner state.count (notre initial state passé à notre reducer dans index.js). Et on a accès grâce à useSelector 
   // const cart = useSelector(state => state.cart) // pour l'ajout dans le panier
    
    const {cart,  count, imgURL} = useSelector(state => ({ // on recupere les objets state (initial state) de addreducter et counterreducter. Et à partir de la , on fait du destructuring, et on recupere nos constantes qui sont égales aux propriétés dans initial state (count:999; cart: 0)
        ...state.AddCartReducer,
        ...state.CounterReducer,
        ...state.dataImgReducer
    }))

    useEffect(() =>{ // ça enverra un dispatch à la fin du premier affichage de mon composant, ensuite on pourra resupéerer nos donnees grace au useselector, et on pourra les afficher.
        dispatch(getCatImg())
    },[])

// En cliquant sur le bouton +- ça dispatch (envoicounte) une action avec son type (dec, inc). En fonction de l'action , on fera +- 1 dans notre reducer.

    const dispatch = useDispatch(); //usedispacth permet de retourner une fonction qu'on pourra reutiliser

    const incrFunc = () => { // FOURNI UN OBJET AVEC UNE Propriété vu qu'on a instancié plus haut
        dispatch({
            type: "INCR"
        })
    }
    const decrFunc = () => {
        dispatch({
            type: "DECR"
        })
    }

    const [cartData, setCartData] = useState(0);

    const addToCartFunc = () => { // dispacth pour l'ajout dans le panier
        console.log('ttet')
        dispatch({
            type: "ADDCART",
            payload: cartData
        })
    }


    return (
        <div>
            <h1>on compte mon petit {count}</h1>
            <h1>on ajoute dans le panier mon petit {cart}</h1> {/* ajout dans le panier*/}
            <button onClick={decrFunc}>-1</button>
            <button onClick={incrFunc}>+1</button>
            <input  
            value={cartData}
            onInput={e => setCartData(e.target.value)} // on a dabord le state de base ensuite quand on  le modifie ca modidie
            type="number"/>   
            <button onClick={addToCartFunc}>Ajouter au panier</button>
            {imgURL && <img style={{width:"300px"}} src={imgURL}/>}
        </div>
    )
}
