import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries/Countries";
import "./App.css";

function App() {
  const [results, setResults] = useState(null);

  const handleSearch = async () => {
    await axios
      .get("http://localhost:3001/countries")
      .then((response) => {
        const countries = response.data;
        setResults(countries);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    console.log("Valor actual de results:", results);
  }, [results]);

  return (
    <>
      <Countries results={results} />
      <button onClick={handleSearch}>Buscar países</button>
    </>
  );
}

export default App;
