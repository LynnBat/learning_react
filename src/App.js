import { useState, useCallback } from 'react';
import './App.css';

function randomName() {
  return fetch('https://randomuser.me/api/?results=1')
      .then((response) => response.json())
      .then((data) => data.results[0].name.first)
      .catch((err) => {
        console.log(err.message);
        });
};

export default function MyApp() {
  const [welcomeText, setNewText] = useState('Hello, world!');

  const handleClick = useCallback(async () => {
    const name = await randomName()
    setNewText('Hello, ' + name + '!')
  }, [])

  return (
    <div>
      <h1> {welcomeText}</h1>
      <button className='greenButton' onClick={handleClick}>
        Halo </button>
    </div>
  )
}
