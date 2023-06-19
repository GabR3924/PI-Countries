import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "./redux/actions/actions";
import Countries from "./components/Countries/Countries";
import "./App.css";

function App() {
  const [results, setResults] = useState(null);

  const dispatch = useDispatch();


  const handleSearch = () => {
    dispatch(getCountries());
  };
  

  // useEffect(() => {
  //   console.log("Valor actual de results:", results);
  // }, [results]);

  return (
    <>
      <Countries/>
      <button onClick={handleSearch}>Buscar países</button>
    </>
  );
}

export default App;
