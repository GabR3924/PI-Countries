import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const SET_PAGE = "SET_PAGE";
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const SORT_COUNTRIES = 'SORT_COUNTRIES';


export function getCountries() {
    return async (dispatch) => {
        const res = await axios.get ("http://localhost:3001/countries");
        dispatch({ type:GET_COUNTRIES, payload: res.data })
    }
}

export function setPage(page){
  return async (dispatch) => {
    dispatch({ type:SET_PAGE, payload: page })
  }
}

export function nextPage() {
  return { type: NEXT_PAGE };
}

export function prevPage() {
  return { type: PREV_PAGE };
}


export function sortCountries() {
  return (dispatch, getState) => {
      const data = [...getState().countries];
      const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
      dispatch({ type:SORT_COUNTRIES, payload: sortedData });
  }
}
