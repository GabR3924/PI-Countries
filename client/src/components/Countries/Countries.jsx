import React from 'react';
import { useSelector } from 'react-redux/dist/react-redux.min.js';


const Countries = ({countries}) => {
  // const results = useSelector(state => state.reducer.countries);

  return (
    <div>
      {countries && countries.map(({ name, flag }, index) => (
        <div key={index}>
          país: {name}
          <img src={flag} alt={`Bandera de ${name}`} />
        </div>
      ))}
    </div>
  );
};

export default Countries;
