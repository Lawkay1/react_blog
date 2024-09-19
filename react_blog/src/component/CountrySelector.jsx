import React, { useMemo } from 'react';
import Select from 'react-select'; // Assuming you're using react-select
import countryList from 'react-select-country-list'; // Assuming you are using this package

function CountrySelector({ changeHandler, value }) {
  // Create the country options once using useMemo
  const options = useMemo(() => countryList().getData(), []);

  return (
    <div>
      {/* <pre>{JSON.stringify(value, null, 2)}</pre> */}
      <Select 
        options={options} 
        value = {value.label}
        onChange = {(value)=> changeHandler(value.label)}
      />
    </div>
  );
}

export default CountrySelector;
