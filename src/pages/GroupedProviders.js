import React from 'react';
import { useProviders } from './ProviderContext';

const GroupedProviders = () => {
  const { providers, groupedProviders } = useProviders();
  console.log(providers);
  console.log(groupedProviders);

  return (
    <div className="example-page">
      <div className="content">
        <h1>Example Page</h1>
      </div>
    </div>
  );
};

export default GroupedProviders;
