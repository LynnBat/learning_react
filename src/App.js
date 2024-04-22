import { useState, useCallback } from 'react';
import './App.css';

async function randomName() {
  try {
    const response = await fetch('https://randomuser.me/api/?results=1');
    const data = await response.json();
    return data.results[0].name.first;
  } catch (err) {
    console.log(err.message);
  }
};

export default function MyApp({greeting = 'Hello, world!'}) {
  const [welcomeText, setNewText] = useState(greeting);

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
