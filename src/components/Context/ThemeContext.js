import React, {createContext, useState} from 'react' // creation d'un context: createcontext

export const ThemeContext = createContext(); // on se cree un contexte ici

const ThemeContextProvider = props => { // on se cree un composant qui va contenir notre state, dans le but de retourner plus bas notre composant
    
    const [theme, setTheme] = useState(false)

    const toggleTheme = () => {
        setTheme(!theme)
    }

    if(theme){
        document.body.classList.add('dark-body') //bascule du mode sombre class css dark-body créee
    }else{
        document.body.classList.remove('dark-body')
    }

    console.log(ThemeContext)

    return (
        <ThemeContext.Provider value= {{toggleTheme, theme}}> {/* Il vient de la creation de notre contexte ci-dessus. Un provider permet d'apporter des données (Theme ci-dessus) dans toute l'application // Value doit toujours etre après le .(point)provider car on doit mentionner la valeur que l'on veut passer*/}
             {props.children}  {/* Affiche tous les enfants ici. .children car on ne sait pas exactement ce qui sera affiché.  */}
        </ThemeContext.Provider>
    )
    }
    export default ThemeContextProvider;
