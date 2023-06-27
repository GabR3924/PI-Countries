import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const SET_PAGE = "SET_PAGE";
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const SORT_COUNTRIES = 'SORT_COUNTRIES';
export const SORT_COUNTRIES_DESCENDING = 'SORT_COUNTRIES_DESCENDING';
export const SORT_POPULATION = 'SORT_POPULATION'
export const SORT_POPULATION_DESCENDING = 'SORT_POPULATION_DESCENDING'
export const SET_SELECTED_COUNTRY = 'SET_SELECTED_COUNTRY';
export const SET_SELECTED_CONTINENT = 'SET_SELECTED_CONTINENT';
export const GET_ACTIVITIES = 'GET_ACTIVITIES'
export const POST_ACTIVITY = 'POST_ACTIVITY'
export const SET_ERROR = 'SET_ERROR'
export const VALIDATE_FORM ='VALIDATE_FORM'
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY';


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

export function sortCountriesDescending() {
  return (dispatch, getState) => {
      const data = [...getState().countries];
      const sortedData = data.sort((a, b) => b.name.localeCompare(a.name));
      dispatch({ type: SORT_COUNTRIES_DESCENDING, payload: sortedData });
  }
}

export function sortPopulation() {
  return (dispatch, getState) => {
      const data = [...getState().countries];
      const sortedData = data.sort((a, b) => b.population - a.population);
      dispatch({ type:SORT_POPULATION, payload: sortedData });
  }
}

export function sortPopulationDescending() {
  return (dispatch, getState) => {
    const data = [...getState().countries];
    const sortedData = data.sort((a, b) => a.population - b.population);
    dispatch({ type:SORT_POPULATION_DESCENDING, payload: sortedData });
}
}

export function setSelectedCountry(country) {
  return { type: SET_SELECTED_COUNTRY, payload: country };
}

export function setSelectedContinent(continent) {
  return { type: SET_SELECTED_CONTINENT, payload: continent }
}

export function getActivities(){
  return async (dispatch) => {
    const res = await axios.get ("http://localhost:3001/activities");
    dispatch({ type:GET_ACTIVITIES, payload: res.data.data })
}
}

export function postActivity(data){
  return async (dispatch) => {
    const res = await axios.post("http://localhost:3001/new/activity", data);
    dispatch({ type:POST_ACTIVITY, payload: res.data })
}
}

export const setError = (error) => ({
  type: 'SET_ERROR',
  payload: error
});

export const validateForm = (data) => {
  if (!data.name) {
    return { type: 'SET_ERROR', payload: 'El campo nombre es obligatorio' };
  }
  if (!data.dificultad) {
    return { type: 'SET_ERROR', payload: 'El campo dificultad es obligatorio' };
  }
  if (!data.duracion) {
    return { type: 'SET_ERROR', payload: 'El campo duracion es obligatorio' };
  }
  if (!data.temporada) {
    return { type: 'SET_ERROR', payload: 'El campo temporada es obligatorio' };
  }
  return { type: 'SET_ERROR', payload: '' };
};

export function searchCountry(name) {
  return (dispatch, getState) => {
    const data = [...getState().countries];
    const selectedCountry = data.find((country) => country.name === name);
    dispatch({ type: SEARCH_COUNTRY, payload: selectedCountry });
  }
}
