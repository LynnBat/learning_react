import { useState, useEffect } from 'react';

let endpoint = '/api/v1/providers/SE'

async function fetchProviders() {
  try {
    const response = await fetch(endpoint, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    return data.providers.map(provider => ({
      displayName: provider.displayName,
      icon: provider.images.icon
    }))
  } catch (err) {
    console.log(err.message);
  }
};

const Providers = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetchProviders().then(providers => {
      setProviders(providers);
    });
  }, []);

  console.log(providers);

  return (
    <div className="grid-container">
      {providers.map((provider, index) => (
        <div key={index} className="grid-item">
          <img src={provider.icon} alt={provider.displayName} className="icon" />
          <div className="name">{provider.displayName}</div>
        </div>
      ))}
    </div>
  );
};

export default Providers;
