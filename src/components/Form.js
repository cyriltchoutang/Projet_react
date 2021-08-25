import {useState, useEffect} from 'react'
import Item from './item'
import {v4 as uuidv4} from 'uuid' //importe librairie de génération de clé 
export default function Form(){

    const [dataArr, setDataArr] = useState([
        {txt: "Promener le chien", id: uuidv4()},
        {txt: "sport", id: uuidv4()},
        {txt: "coder avec react", id: uuidv4()}
    ])

    const [stateInput, setStateInput] = useState(); // ajout d'infos

    
        
        const linkedInput = e => { // le state de MAJ de la valeur saisie
            setStateInput(e)
            console.log(e);
        }


    const deleteElement = id => {
        console.log(id);
        const filteredState = dataArr.filter(item => { // on retourne un tableau sans le item qu'on a sélectionné
            return item.id !== id;
        })
        setDataArr(filteredState) // MAJ
    }

    const addTodo = e => {
        e.preventDefault(); // vielle methode JS pour eviter d'actualiser la page lors du click sur envoyer 
        const newArr = [...dataArr] // on cree un nouveau tableau en rajoutant tous nos objets
        const newTodo = {}; // on cree un nouvel objet 
        newTodo.txt = stateInput // et on rajoute notre valeur
        newTodo.id = uuidv4(); // nouveelle clé
        newArr.push(newTodo); // on pousse les éléments dans notre nouveau tableau
        setDataArr(newArr); //MAJ
        setStateInput('') // on vide le champs
    }
    return (

        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6"> {/*gestion responsive*/}

            <form onSubmit ={addTodo} className="mb-3"> {/* on appelle la fonction au moment de soumettre le formulaire*/}
                <label htmlFor="todo" className="form-label mt-3">Chose à faire</label>
                <input 
                value={stateInput} // la valeur saisie. c'est pour vider le champs
                onInput={e => linkedInput(e.target.value)} // recupere les valeurs saisies
                type="text" className="form-control" id="todo"/>

                <button className="mt-2 btn btn-primary d-block">Envoyez</button>
            </form>

            <h2>Liste des choses à faire : </h2>
            <ul className="list-group">
                {dataArr.map((item) => { /* afficher les données du tableau grace aux props */
                    return(
                        <Item 
                        txt={item.txt}
                        key={item.id} // la clé ici est juste pour react. nous on utilisera les id, d'ou la ligne ci-dessous
                        id={item.id}
                        delFunc={deleteElement} // on passe en props pour l'utiliser ailleur
                        />
                    )
                })}
            </ul>   
        </div>

    )
}