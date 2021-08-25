const INITIAL_STATE = { // convention de nommage 
    imgURL: ""
}

function dataImgReducer(state = INITIAL_STATE, action){ // 

    switch(action.type){  // 
        case 'LOADIMG':{ // 
            return {  // 
                ...state,
                imgURL: action.payload
            }
        }

    }
   
    return state;
}

export default dataImgReducer;

// getcatchimg nous retourne des choses de manieres asynchrones, et puis on fait dispatch
//On a donc une methode getCatimg qu'on va appeler lors de nos dispatch, cette methode va aller chercher des données et envoyer un nouveau dispatch avec des données qu'on aura recu de manière asynchrones.
export const getCatImg = () => dispatch => {
    fetch('https://api.thecatapi.com/v1/images/search') // recup api de images de chat
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: 'LOADIMG',
            payload: data[0].url
        })
    })
}