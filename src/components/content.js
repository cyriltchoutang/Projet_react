import React from 'react'

function content(props) {
    console.log(props);
    return (
        <div className="content">
            <h1>{props.num}</h1>
            <h1>{props.num1}</h1>
        </div>
    )
}

export default React.memo(content); //Grace à react.memo, il verifie au niveau du render si ses props ont changé. Si son contenu a changé si ce n'est pas le cas alors pas besoin de se mettre à jour. Ceendant pour les tableaux ça ne marche pas car react prend les tableaux comme une reference. D'où l'uilisation de Usememo pour surveiller les props.