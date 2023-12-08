import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Personagens = ({familia}) => {
  const personagens = [
    'Jill Valentine',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
  ];

  const personagensFiltrados = personagens.filter(personagem =>
    personagem.toLowerCase().includes(familia.toLowerCase())
 );

 return (
  <div className="container">
    <h3>Personagens de Resident Evil({familia})</h3>
    <ul className="lista">
      {personagensFiltrados.map((personagem, index) => (
        <li key={index}>{personagem}</li>
      ))}
    </ul>
  </div>
);
}


const App = () => {
  return (
     <div>
       <Personagens familia="Redfield" />
     </div>
  )
 }
 
 export default App;

