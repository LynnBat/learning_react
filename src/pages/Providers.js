let endpoint = '/api/v1/providers/SE'

async function fetchProviders() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.providers;
  } catch (err) {
    console.log(err.message);
  }
};

const Providers = () => {
  const providerList = fetchProviders();

  console.log(providerList);

  return (
    <div>
      <h1>Example Page</h1>
    </div>
  );
};

export default Providers;
