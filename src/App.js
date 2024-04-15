import { useState } from 'react';
import './App.css';

export default function MyApp() {
  const [welcomeText, setNewText] = useState('Hello, world!');
  const name = ['James', 'Marry', 'Patrick', 'Jennifer', 'Robert', 'Linda', 'Richard', 'Lisa', 'William'];
  const randomName = name[Math.floor(Math.random() * name.length)];

  return (
    <div  style={{  }}>
      <h1> {welcomeText}</h1>
      <button className='greenButton' onClick={() => setNewText('Hello, ' + randomName + '!') }>
        Halo </button>
    </div>
  );
}
