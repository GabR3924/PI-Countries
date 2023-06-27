import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, setPage } from "../redux/actions/actions";

function usePagination() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const selectedContinent = useSelector((state) => state.selectedContinent);
  const filteredCountries = countries.filter(
    (country) =>
      selectedContinent === "All" || country.continente === selectedContinent
  );
  const page = useSelector((state) => state.page);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCountries = filteredCountries.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

  console.log("countries", countries)
  
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleNextPage = () => {
    dispatch(setPage(page + 1));
  };

  const handlePrevPage = () => {
    dispatch(setPage(Math.max(page - 1, 0)));
  };

  return {
    visibleCountries,
    page,
    totalPages,
    handleNextPage,
    handlePrevPage,
  };
}

export default usePagination;
