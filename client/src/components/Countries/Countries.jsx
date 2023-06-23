import React from "react";
import Card from "../Card/Card";
import style from "./Countries.module.css";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  sortCountries,
  sortCountriesDescending,
  sortPopulation,
  sortPopulationDescending,
} from "../../redux/actions/actions";
import usePagination from "../../usePagination/usePagination";
import { setSelectedCountry } from "../../redux/actions/actions";
import CardDetail from "../cardDetail/cardDetail";
import { useNavigate } from "react-router-dom";

const Countries = ({
  sortCountries,
  sortCountriesDescending,
  sortPopulation,
  sortPopulationDescending,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedCountry = useSelector((state) => state.selectedCountry);
  const {
    visibleCountries,
    page,
    totalPages,
    handleNextPage,
    handlePrevPage,
  } = usePagination();

  const handleCountryClick = (country) => {
    dispatch(setSelectedCountry(country));
    navigate("/detail");
  };

  return (
    <div className={style.section}>
      <div className={style.filters}>
        <button onClick={sortCountries}>A - Z</button>
        <button onClick={sortCountriesDescending}>Z - A</button>
        <button onClick={sortPopulation}>poblacion +</button>
        <button onClick={sortPopulationDescending}>poblacion -</button>
      </div>
      <div className={style.cards}>
        {visibleCountries &&
          visibleCountries.map((country) => (
            <Card
              key={country.id}
              name={country.name}
              flag={country.flag}
              poblacion={country.population}
              onClick={() => handleCountryClick(country)}
            />
          ))}
          
      </div>
      <div className={style.buttons}>
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
    </div>
  );
};

const mapDispatchToProps = {
  sortCountries,
  sortCountriesDescending,
  sortPopulation,
  sortPopulationDescending,
};

export default connect(null, mapDispatchToProps)(Countries);
