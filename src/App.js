import { useState } from 'react';
import './App.css';

function RandomName() {
  const name = ['James', 'Marry', 'Patrick', 'Jennifer', 'Robert', 'Linda', 'Richard', 'Lisa', 'William'];
  return name[Math.floor(Math.random() * name.length)];
}

export default function MyApp() {
  const [welcomeText, setNewText] = useState('Hello, world!');
  const randomName = RandomName();

  return (
    <div>
      <h1> {welcomeText}</h1>
      <button className='greenButton' onClick={() => setNewText('Hello, ' + randomName + '!') }>
        Halo </button>
    </div>
  );
}
