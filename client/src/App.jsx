import { useEffect } from "react";
import Countries from "./components/Countries/Countries";
import "./App.css";
import usePagination from "./usePagination/usePagination";

function App() {
  const { visibleCountries,page, totalPages, handleNextPage, handlePrevPage } = usePagination();

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
