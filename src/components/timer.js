 import {useState, useEffect, Fragment} from 'react'



function Timer() {

  const [timer, setTimer] = useState(1)

  

  useEffect(() => {

    const intervalID = setInterval(() => { //setInterval permet d'exécuter une methode chaque x (1000ms) temps
      setTimer(timer => timer + 1) // On fourni une fonction callback (timer) pour que l'incrementation continue. Le but est d'avoir un state frais pour les MAJ. Car si on met juste (timer +1 ) il va rester à 2 à cause du vide dans l'argument 
    }, 1000)

    return () => {
      clearInterval(intervalID); // clearInterval permet de nettoyer la memoire afin qu'elle ne soit ps saturée. elle nettoie seulement quand le composant sera supprimé. C'est pour cela qu'on a crée la fonction clearInterval
    }

  }, [])


  return (
    <Fragment> 
        <h1>ppff{timer}</h1>
        <h1>{timer}</h1>
        <h1>{timer}</h1>
        <h1>{timer}</h1>
    </Fragment>
  );
}

export default Timer;