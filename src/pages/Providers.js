import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

let endpoint = "/api/v1/providers/DE";

async function fetchProviders() {
  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data.providers.map((provider) => ({
      displayName: provider.displayName,
      icon: provider.images.icon,
      providerName: provider.name,
      groupDisplayName:
        provider.fields.groupDisplayName || provider.displayName,
    }));
  } catch (err) {
    console.log(err.message);
  }
}

const Providers = () => {
  const [groupedProviders, setGroupedProviders] = useState(new Map());
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedGroup, setSelectedGroup] = useState(
    searchParams.get("group") || ""
  );
  const [selectedProvider, setSelectedProvider] = useState(
    searchParams.get("provider") || ""
  );

  useEffect(() => {
    fetchProviders().then((providers) => {
      const groupedProviders = Map.groupBy(providers, (provider) => {
        //group be financial institution id
        return provider.groupDisplayName;
      });
      setGroupedProviders(groupedProviders);
    });
  }, []);

  useEffect(() => {
    const params = {};
    if (selectedGroup) params.group = selectedGroup;
    if (selectedProvider) params.provider = selectedProvider;
    setSearchParams(params);
  }, [selectedGroup, selectedProvider, setSearchParams]);

  console.log(groupedProviders);

  useEffect(() => {
    const group = searchParams.get("group");
    const provider = searchParams.get("provider");
    if (group) setSelectedGroup(group);
    if (provider) setSelectedProvider(provider);
  }, [searchParams]);

  function handleSelectedGroup(group) {
    setSelectedGroup(group);
    setSelectedProvider("");
  }

  function chooseProvider(providerName) {
    setSelectedProvider(providerName); //object not a name
  }

  if (groupedProviders.size === 0) {
    return <div>spinner</div>;
  }

  return (
    <div className="provider-page">
      <div className="provider-block grid-container">
        {selectedGroup === "" &&
          selectedProvider === "" &&
          Array.from(groupedProviders.entries()).map(([key, value]) => (
            <GroupProvider
              key={key}
              name={key}
              value={value}
              handleSelectedGroup={handleSelectedGroup}
            />
          ))}
        {selectedGroup !== "" && selectedProvider === "" && (
          <>
            <button className="arrow" onClick={() => setSelectedGroup("")}>
              ᐊ
            </button>
            {groupedProviders.get(selectedGroup).map((provider, index) => (
              <div
                className="grid-item"
                key={index}
                onClick={() => chooseProvider(provider.providerName)}
              >
                <img
                  src={provider.icon}
                  alt={provider.displayName}
                  className="icon"
                />
                <li className="name">{provider.displayName}</li>
              </div>
            ))}
          </>
        )}
        {selectedGroup !== "" &&
          selectedProvider !== "" && ( //selectedGroup can also be empty, but the provider shouldn't?
            <div>
              <h3>Selected Provider: {selectedProvider}</h3>
            </div>
          )}
      </div>
    </div>
  );
};

function GroupProvider({ name, value, handleSelectedGroup }) {
  return (
    <div className="grid-item" onClick={() => handleSelectedGroup(name)}>
      <img src={value[0].icon} alt={name} className="icon" />
      <li className="name">{name}</li>
    </div>
  );
}

export default Providers;

//country as well
//convert to typescript
//push the changes
