import React from 'react';
import Card from '../Card/Card';
import style from './Countries.module.css'
import { connect } from 'react-redux';
import { sortCountries, sortCountriesDescending } from '../../redux/actions/actions';
import usePagination from "../../usePagination/usePagination";

const Countries = ({ sortCountries, sortCountriesDescending }) => {
  const { visibleCountries, page, totalPages, handleNextPage, handlePrevPage } = usePagination();

  return (
    <div className={style.cards}>
      <div>
        <button onClick={sortCountries}>A - Z</button>
        <button onClick={sortCountriesDescending}>Z - A</button>
      </div>
      {visibleCountries && visibleCountries.map(({ name, flag }, index) => (
        <Card key={index}
          name={name}
          flag={flag} />
      ))}
      <p>
        Página {page + 1} de {totalPages}
      </p>
      <button onClick={handlePrevPage} disabled={page === 0}>
        Anterior
      </button>
      <button onClick={handleNextPage} disabled={page === totalPages - 1}>
        Siguiente
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  sortCountries,
  sortCountriesDescending
}

export default connect(null, mapDispatchToProps)(Countries);
