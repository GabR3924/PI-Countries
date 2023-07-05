import { useState } from "react";
import Card from "../Card/Card";
import style from "./Countries.module.css";
import { connect, useDispatch } from "react-redux";
import {
  sortCountries,
  sortCountriesDescending,
  sortPopulation,
  sortPopulationDescending,
  setSelectedCountry,
  setSelectedContinent,
  searchCountry,
} from "../../redux/actions/actions";
import usePagination from "../../usePagination/usePagination";
import { getVisibleCountries } from "../../redux/reducer/selectors";
import { BiSearchAlt } from 'react-icons/bi'
import Modal from "../Modal/Modal";
import CardDetail from "../cardDetail/cardDetail";
import { useSelector } from "react-redux";


const Countries = ({
  sortCountries,
  sortCountriesDescending,
  sortPopulation,
  sortPopulationDescending,
  setSelectedCountry,
  searchCountry,
}) => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const selectedCountry = useSelector((state) => state.selectedCountry);



  const { visibleCountries, page, totalPages, handleNextPage, handlePrevPage } =
    usePagination();

  const handleCountryClick = (country) => {
    dispatch(setSelectedCountry(country));
    setShowModal(true)
  };

  const handleContinentChange = (event) => {
    dispatch(setSelectedContinent(event.target.value));
  };

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
    console.log(searchName);
  };

  const handleSearchClick = () => {
    dispatch(searchCountry(searchName));
    setSearchName("");
    console.log("limpio", searchName);
  };

  return (
    <div className={style.section}>
      <div className={style.var}>
      <div className={style.searchBar}>
        <input type="text" value={searchName} onChange={handleSearchChange} />
        <button onClick={() => handleSearchClick(searchName)}><BiSearchAlt/></button>
      </div>
      <div className={style.filters}>
        <label>
          <select onChange={handleContinentChange}>
            <option value="All">Todos</option>
            <option value="Africa">África</option>
            <option value="Americas">América</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceanía</option>
          </select>
        </label>
        <button onClick={sortCountries}>A - Z</button>
        <button onClick={sortCountriesDescending}>Z - A</button>
        <button onClick={sortPopulation}>poblacion +</button>
        <button onClick={sortPopulationDescending}>poblacion -</button>
      </div>
      </div>
      
      <div className={style.cards}>
        {visibleCountries &&
          visibleCountries.map((country) => (
            <Card
              key={country.id}
              id={country.id}
              name={country.name}
              flag={country.imagen}
              continent={country.continente}
              onClick={() => handleCountryClick(country)}
            />
          ))}
      </div>
      <div className={style.buttons}>
        <p>
           {page + 1} de {totalPages}
        </p>
        <div className={style.btn}>
        <button onClick={handlePrevPage} disabled={page === 0}>
          Anterior
        </button>
        <button onClick={handleNextPage} disabled={page === totalPages - 1}>
          Siguiente
        </button>
        </div>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CardDetail country={selectedCountry} />
        </Modal>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  visibleCountries: getVisibleCountries(state),
});

const mapDispatchToProps = {
  sortCountries,
  sortCountriesDescending,
  sortPopulation,
  sortPopulationDescending,
  setSelectedContinent,
  setSelectedCountry,
  searchCountry,
};

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
