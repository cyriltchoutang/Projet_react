import {useState, useEffect, useRef, useMemo, useCallback} from 'react'


import React from 'react'

export default function useDimension() {

    const [dimension, setDimension] = useState();
//  Le but de ce hook est de permettre de retourner dans la console la largeur du navigateur à chaque resize (agrandir et diminue l'ecran)
    useEffect(() => {
        window.addEventListener('resize', resizeFunc);
        function resizeFunc(){
            setDimension(window.innerWidth) // window.innerwidht est la largeur à l'interieur de notre navigateur. 
        }
        resizeFunc(); // On l'appelle une fois pour pouvoir avoir une valeur de base dans le navigateur
        return () =>{
            window.addEventListener('resize',resizeFunc); // cleanup fonction. en cas de destruction
        }
    })
    return dimension
}
