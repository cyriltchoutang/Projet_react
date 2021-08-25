import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form'
import {useState, useEffect, useRef, useMemo, useCallback} from 'react'
import './App.css';
import './components/timer'
import Timer from './components/timer';
import Video from '../src/PSC.mp4';
//import Content from './components/content'
import useDimension from './useDimension' // import de notre hook
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' // Importe librairie pour les routes
import Accueil from './components/Accueil';
import Projet from './components/Projet';
import Contact from './components/Contact';
import NAV from './components/Nav';
import content from './components/content'
import Content from './components/Content/Content'
import BtnToggle from './components/BtnToggle/BtnToggle'
import ThemeContext from './components/Context/ThemeContext';
import Accord from './components/Accord/Accord'
import Counter from './components/Counter'
import Modal from './components/Modal/Modal'



function App() {
  console.log('App')
  return (
    <div className="App">
    <ThemeContext/>
    </div>
  );
}

export default App;
