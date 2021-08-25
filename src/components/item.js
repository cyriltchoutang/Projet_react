export default function Item(props) { //on ecrit props car on va recevoir des props
    return (
        <li className="border d-flex justify-content-between align-items-center  p-2 m-2">
            <div className="p-3">{props.txt}</div> {/* retourne les éléments*/}
            <button 
            className="btn btn-danger p-2 h-50"
            onClick = {() => props.delFunc(props.id)}>Supprimer</button>
        </li>
    )
}

