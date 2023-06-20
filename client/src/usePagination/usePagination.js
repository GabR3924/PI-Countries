import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, setPage } from "../redux/actions/actions";

function usePagination() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const page = useSelector((state) => state.page)
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCountries = countries.slice(startIndex, endIndex);
  const totalPages = Math.ceil(countries.length / itemsPerPage);


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