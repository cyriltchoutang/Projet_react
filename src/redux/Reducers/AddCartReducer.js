const INITIAL_STATE = { // convention de nommage 
    cart: 0
}

function AddCartReducer(state = INITIAL_STATE, action){ // 

    switch(action.type){  // 
        case 'ADDCART':{ // 
            return {  // 
                ...state,
                cart: action.payload
            }
        }

    }
   
    return state;
}

export default AddCartReducer;