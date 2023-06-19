import React from 'react';
import { useSelector } from 'react-redux';


const Countries = () => {
  const results = useSelector(state => state.reducer.countries);

  return (
    <div>
      {console.log(results)}
      {results && results.map(({ name, flag }, index) => (
        <div key={index}>
          país: {name}
          <img src={flag} alt={`Bandera de ${name}`} />
        </div>
      ))}
    </div>
  );
};

export default Countries;
