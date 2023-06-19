import React from 'react';
import Card from '../Card/Card';
import style from './Countries.module.css'

const Countries = ({ countries, page, totalPages, onNextPage, onPrevPage }) => {

  return (
    <div className={style.cards}>
      {console.log('countriesCard',countries)}
      {countries && countries.map(({ name, flag }, index) => (
        <Card key={index}
        name={name}
        flag={flag}/>
      ))}
      <p>
        Página {page + 1} de {totalPages}
      </p>
      <button onClick={onPrevPage} disabled={page === 0}>
        Anterior
      </button>
      <button onClick={onNextPage} disabled={page === totalPages - 1}>
        Siguiente
      </button>
    </div>
  );
};

export default Countries;
