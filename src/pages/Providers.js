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
      icon: provider.images.icon,
      groupDisplayName: provider.fields.groupDisplayName || provider.displayName
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

  const groupedProviders = Object.groupBy(providers, ({ groupDisplayName }) => groupDisplayName);

  console.log(groupedProviders);

  return (
    <div className="provider-page">
      <div className="provider-block grid-container">
        {Object.values(groupedProviders).map((groupProvider, index) => (
          <div key={index} className="grid-item">
            <a href="/example" >
              <img src={groupProvider[0].icon} alt={groupProvider[0].displayName} className="icon" />
              <div className="name">{groupProvider[0].displayName}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Providers;
