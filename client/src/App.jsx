import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries,setPage } from "./redux/actions/actions";
import Countries from "./components/Countries/Countries";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const page = useSelector((state) => state.page)
  const countriesPerPage = 12;
  const startIndex = page * countriesPerPage;
  const endIndex = startIndex + countriesPerPage;
  const visibleCountries = countries.slice(startIndex, endIndex);
  const totalPages = Math.ceil(countries.length / countriesPerPage);

  console.log('Countries', countries)
  console.log('visibles', visibleCountries)
 console.log("startIndex", startIndex, "endIndex", endIndex)

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleNextPage = () => {
    dispatch(setPage(page + 1)); 
  };
  
  const handlePrevPage = () => {
    dispatch(setPage(Math.max(page - 1, 0)));
  };
  


  return (
    <>
        <Countries
        countries={visibleCountries}
        page={page}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </>
  );
}

export default App;
