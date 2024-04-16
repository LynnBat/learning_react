import { useState, useEffect } from 'react';
import './App.css';

function RandomName() {
  const [name, setName] = useState([]);
  
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=1')
      .then((response) => response.json())
      .then((data) => setName(data.results[0].name.first))
      .catch((err) => {
        console.log(err.message)});
  }, []);

  return (
    'Hello, ' + name + '!'
  )
};

export default function MyApp() {
  const [welcomeText, setNewText] = useState('Hello, world!');
  const halo = RandomName()

  return (
    <div>
      <h1> {welcomeText}</h1>
      <button className='greenButton' onClick={() => setNewText(halo) }>
        Halo </button>
    </div>
  )
}
