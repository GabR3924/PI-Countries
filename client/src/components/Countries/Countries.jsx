import React from 'react';

const Countries = ({ results }) => {
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
