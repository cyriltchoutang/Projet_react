import { createStore, combineReducers, applyMiddleware } from 'redux'; // Ou on pourra stocker nos données et les modifier// combineReducers permet de combiner tous nos reducers
import CounterReducer from './Reducers/CounterReducer' // Importe notre reducer
import AddCartReducer from './Reducers/AddCartReducer'
import thunk from 'redux-thunk' // Importe middleware thunk
import dataImgReducer from './Reducers/dataImgReducer';

const rootReducer = combineReducers({ // combiner nos reducers
  CounterReducer,
  AddCartReducer,
  dataImgReducer
})
//const store = createStore(CounterReducer); //On cree notre store , il contiendra nos données.
//const store = createStore(AddCartReducer);// 

// A chaque fois qu'on exécute un dispacth , un middleware va zse déclencher, il executera le poste de  control ci-dessous (applyMiddleware(customMiddleware)), qui, après va exécuter ce qui se trouve dans customMiddleware, et va continuer (next)le chemin jusqu'au reducer -> store 
const customMiddleware = store => next => action =>{ // On fait de la purification (appeler plusieurs fonctions les une les autres). store retourne une fonction next qui retourne action qui retourne un contenu. Le but est d'avoir accès à store, next et action dans mon corp
  const actionModif = { // avec cette action, le middleware prendra en compte les valeurs ci-dessous et non les précédentes valeurs. Ensuite les enverra au dispacth pour la suite
    type: "ADDCART",
    payload: 789,
  }
  next(actionModif)
}

//const store = createStore(rootReducer, applyMiddleware(customMiddleware)); //On cree notre store , il contiendra nos données. 
const store = createStore(rootReducer, applyMiddleware(thunk)); // middleware pour recup api/ fonction vers dispatch
export default store;