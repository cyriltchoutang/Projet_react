import React, { Component } from 'react';  // on  importe le composant de la librairie react 
import logo from './logo.svg';
import './App.css';
import Titre from './titre';
import post from './post';
import Item from './components/item/item';
import {useState} from 'react' // Importe le state

/*
// Destructuring
//old
const pays = {
  nom: "Italie",
  pop: 60
}
//const nom = pays.nom;
//console.log(nom)

// new
//const {nom, pop} = pays;
//console.log(nom,pop);

//new1
const data = ({nom}) => nom; // attend la propriété d'un objet et recupere sa valeur
console.log(data(pays));

const arr = [1,2,3];
const [a,b,c] = arr;
console.log(a,b,c); // On aura comme valeur 1,2,3

// Fonction callback (fonction qui se fait appeler en paramètre dans une autre fonction)
//const arr = [1,2,3,4,5,6];

const mapedArr = arr.map(x => x+10); //retourne un tableau de de valeur +10 [11,12,13,14,15,16]
console.log(mapedArr);

const filteresArr = arr.filter(num => num >2) // retourne un tableau en filtrant 
console.log(filteresArr);

arr.forEach(val => {  // ne retourne pas un tableau, mais plutôt chaque valeur -90 89,88,87,86,.
  console.log(val - 90)
})

const raw0 = [5,6,700,800]
var raw1 = []

// js procedural / old
for (let i=0; i<raw0.length;i++){
  if(raw0[i] > 100){
    raw1.push(raw0[i]);
  }
}
console.log(raw1);
// cyril

for(let j of raw0){
  if(j>100){
     raw1 = [...raw1,j]
    }
}
console.log(raw1);
*/
/*

// Fonction pure. n'utilise pas des elements externes. retournera donc toujours les mêmes valeurs
const add2 = (a,b) => a+b;

console.log(add2(2,2))

// rest opérator : lorsqu'on ne connait pas les éléments on utilise args
function arr0(...args){
  console.log(args)
  let result =0;
  for(const arg of args){ result += arg;} //  ça additionnera tous les arguments passés en fonction
  // pour un tableau on utilise of pour un objet c'est in
}
console.log(arr0(2,3,4))

// spread opérator dans un tableau, on ajoute
const arr = [0,1,2,3];
const arr2 = [...arr,4]; 
console.log(arr2);

// dans un objet
const arr3 = {
  a:1,
  b:2,
  c:3
}
const arr4 = {
  ...arr3,
  d:4
}
console.log(arr4)

// objet classique avec sa propriété
const test = {
  foo: function(){
    console.log("hello");
  }
  }
// maniere de tony
const test1 = {
  foo1: 32
}
console.log(test1.foo1);

// new

const test2 = {
  a: 5,
  foo(){  // foo est une méthode. car les fonctions à l'intérieur des objets sont les méthodes
    console.log(this.a); // appelle ce qui est dans l'objet
  }
  }
console.log(test2)
*/

function App() {
//class App extends Component { // On crée le composant ici.  car dans les nouvelles fonctionnalités, dans app, app est de type function et non class
 
//  presentation = () => {  //fonction fléchée
  
//    return 'Hello tony';
//  }


// But retourner des données. généralement le deuxieme parametre est nommé set...
 const [monState, setMonState] = useState(10)
 console.log(monState);
 console.log("rtdtrdt");

//  const [toggle, setToggle] = useState(true);
//  const changeState = () =>{
//    setToggle(!toggle)
//  }
//  if(toggle){
//  return (
//   <div className="App">
//     <h1>Le state est True</h1>
//     <button onClick={changeState}>Change state</button>
//   </div>
// );
// } else if (toggle === false){
//   return (
//     <div className="App">
//       <h1>Le state est False</h1>
//       <button onClick={changeState}>Change state</button>
//     </div>
//   );
// }


// gestion des listes

const [dataArr, setDataArr]= useState([
  {nom: "Juliette"},
  {nom: "John"},
  {nom: "Joris"}
]);

  console.log('test00')
  return(
    <div className="App"> {/* Retourner les éléments d'un tableau grâce à map */}
      {dataArr.map((item, index) => {
        return <p key={index}>Nom: {item.nom}</p>
      })}
    </div>
  )


      
// const [inputData, setInputData] = useState();
// //const [inputData, setInputData] = useState(10); //  si on veut avoir une valeur par defaut

// const changeInput = (a) => { // on entre notre pointeur en paramètre et on affiche son contenu
//   console.log(a);
//   setInputData(a) //  met à jour la valeur 
// }
// console.log(inputData);  // il est mis à jour
// return (
//   <div className="App">
//     <h1>Hello depuis App</h1>
//     <input 
//     type="text"
//     //value = {inputData}  pour qu'il ait une valeur par defaut (10) dans le useState
//     onInput={b => changeInput(b.target.value)} // recupère la valeur saisie par le user grâce à target.value. e/b/a est comme un pointeur
//     />
//   </div>
// );


// const modifyState = (data) => {
//   setMonState(data); // affcihe 20 quand on clique 
//   console.log(monState);
//   console.log('attention')
// }// fonction flêchée
// // Toujours passer une fonction dans le onclick
// const toggle = false
// const styleCss = {color: toggle? "crimson" : "green", fontSize: "50px"} 
//  return (
//    <div className="App">
//      <h1 style={styleCss}>Hello app react:  {monState}</h1>  
//      {/* <button onClick={modifyState}>Change state</button> 
//      <Item> number ={monState}</Item>  */}
//      <Item func = { modifyState } />
//    </div>
//  );



  // render(){
  //   const test = 'tony';
    
  //   return (

  //     <div>Bonjour
  //     <div className="App"> {/*difference: classname aulieu de class/ <br />*/}
  //      <Item/>
  //      <Titre/> {/*Importer notre composant  */}
  //      <Titre nom='Hugo'>
  //      je suis un enfant   {/*appel un children*/}
  //      </Titre>
  //      {/*nom.. est un props: une propriété */}
  //      <Titre nom='cyril'/>
  //     {test}
  //        Helo World  {/*c'est du jsx (une annotation javascript), il permet de creerr de l'html en utilisant du js*/}
  //     {this.presentation()}
  //     </div>
  //     </div>
  //   );
  // }
/*  selectId = id => {
    console.log(id);
  }

  render(){
    const posts = this.state.posts.map(post => {
      return <Post 
      key={post.id}
      auteur={post.auteur}
      titre={post.title}
      clicked={() => this.selectId(post.id)}
      />
    })
  }*/

}

export default App; // permet de l'importer dans index.js
