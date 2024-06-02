import React, { createContext, useState, useContext, useCallback } from 'react';

export const ProviderContext = createContext();

export const ProviderProvider = ({ children }) => {
  const [providers, setProviders] = useState([]);

  const fetchProviders = useCallback(async () => {
    let endpoint = '/api/v1/providers/SE';
    try {
      const response = await fetch(endpoint, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setProviders(data.providers.map(provider => ({
        displayName: provider.displayName,
        icon: provider.images.icon,
        providerName: provider.name,
        groupDisplayName: provider.fields.groupDisplayName || provider.displayName,
      })));
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  return (
    <ProviderContext.Provider value={{ providers, fetchProviders }}>
      {children}
    </ProviderContext.Provider>
  );
};

export const useProviders = () => {
  const context = useContext(ProviderContext);

  return context;
};
