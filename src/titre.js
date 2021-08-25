// Création d'un composant
import React, {Component} from 'react';

class Titre extends Component{
    render(){
        return(
            <div>
            <h1>Notre titre depuis un autre composant</h1>
            {this.props.nom} {/*déclarer une propriété*/}
            {this.props.children} {/*//déclarer des enfants*/}
            </div>
        )
    }
}

export default Titre;

