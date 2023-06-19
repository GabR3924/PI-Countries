import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "./redux/actions/actions";
import Countries from "./components/Countries/Countries";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const handleSearch = () => {
    dispatch(getCountries());
  };

  return ( 
    <>
      <Countries countries={countries} />
      <button onClick={handleSearch}>Buscar países</button>
    </>
  );
}

export default App;
