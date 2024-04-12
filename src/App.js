import { useState } from 'react';

export default function MyApp() {
  const [welcomeText, setNewText] = useState('Hello, world!');
  const name = ['James', 'Marry', 'Patrick', 'Jennifer', 'Robert', 'Linda', 'Richard', 'Lisa', 'William'];
  const randomName = name[Math.floor(Math.random() * name.length)];

  return (
    <div style={{ display: 'grid', justifyContent: 'center' }}>
      <h1 style={{ backgroundColor: 'yellow', color: 'green', fontSize: '50px' }}> {welcomeText}</h1>
      <button style={{ backgroundColor: 'green', color: 'yellow', padding: '10px 20px', fontSize: '20px', borderRadius: '12px' }}
 onClick={() => setNewText('Hello, ' + randomName + '!') }>
        Halo </button>
    </div>
  );
}
