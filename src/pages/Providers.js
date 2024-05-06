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
    <div>
      <h1>Example Page</h1>
    </div>
  );
};

export default Providers;
