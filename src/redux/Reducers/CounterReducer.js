const INITIAL_STATE = { // convention de nommage 
    count:999
}
// creation de notre reducer, qui doit etre passé en parametre dans la creation de notre store dans index.js
function CounterReducer(state = INITIAL_STATE, action){ // Il prend une fonction , et il effectue des actions dessus
   
    switch(action.type){  // selon l'action avec laquelle j'ai appelé mon reducer,
        case 'INCR':{ // incrementer le compteur . c'est une convention INCR et DECR
            return {  // ne jamains modifier directement notre state. d'où la copie d'abord.
                ...state,
                count: state.count + 1
            }
        }
        case 'DECR':{ // decrementer le compteur
            return {  // 
                ...state,
                count: state.count - 1
            }
        }
        

    }
   
    return state;
}

export default CounterReducer;