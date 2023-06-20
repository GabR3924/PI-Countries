import React from 'react';
import Card from '../Card/Card';
import style from './Countries.module.css'
import { connect } from 'react-redux';
import { sortCountries, nextPage, prevPage } from '../../redux/actions/actions';

const Countries = ({ countries, page, totalPages, onNextPage, onPrevPage, sortCountries }) => {
  return (
    <div className={style.cards}>
      <div>
        <button onClick={sortCountries}>A - Z</button>
      </div>
      {countries && countries.map(({ name, flag }, index) => (
        <Card key={index}
          name={name}
          flag={flag} />
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

const mapStateToProps = (state) => ({
  countries: state.countries,
  page: state.page
});

const mapDispatchToProps = {
  sortCountries,
  nextPage,
  prevPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
