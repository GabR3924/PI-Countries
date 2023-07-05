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
export const CACHE_COUNTRIES = 'CACHE_COUNTRIES'
export const CACHE_ACTIVITIES = "CACHE_ACTIVITIES";



export function getCountries() {
  return async (dispatch, getState) => {
    try {
      // Verificar si los datos están en caché
      const cachedCountries = getState().cache.countries;
      if (cachedCountries) {
        // Si los datos están en caché, devolverlos
        dispatch({ type: GET_COUNTRIES, payload: cachedCountries });
      } else {
        const res = await axios.get("http://localhost:3001/countries");
        dispatch({ type: CACHE_COUNTRIES, payload: res.data });
        dispatch({ type: GET_COUNTRIES, payload: res.data });
      }
    } catch (error) {
      alert(error.message);
    }
  };
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
      const sortedData = data.sort((a, b) => b.poblacion - a.poblacion);
      dispatch({ type:SORT_POPULATION, payload: sortedData });
  }
}

export function sortPopulationDescending() {
  return (dispatch, getState) => {
    const data = [...getState().countries];
    const sortedData = data.sort((a, b) => a.poblacion - b.poblacion);
    dispatch({ type:SORT_POPULATION_DESCENDING, payload: sortedData });
}
}

export function setSelectedCountry(country) {
  return { type: SET_SELECTED_COUNTRY, payload: country };
}

export function setSelectedContinent(continent) {
  return { type: SET_SELECTED_CONTINENT, payload: continent }
}

export function getActivities() {
  return async (dispatch, getState) => {
    try {
      const cachedActivities = getState().cache.activities;
      if (cachedActivities) {
        dispatch({ type: GET_ACTIVITIES, payload: cachedActivities });
      } else {
        const res = await axios.get("http://localhost:3001/activities");
        dispatch({ type: CACHE_ACTIVITIES, payload: res.data.data });
        dispatch({ type: GET_ACTIVITIES, payload: res.data.data });
      }
    } catch (error) {
      alert(error.message);
    }
  };
}


export function postActivity(data){
  return async (dispatch) => {
    try {
        const res = await axios.post("http://localhost:3001/new/activity", data);
        dispatch({ type:POST_ACTIVITY, payload: res.data })
    } catch (error) {
      return { type: 'SET_ERROR', payload: 'No se pueden repetir los items' };
    }
}
}

export function setError (error)  {
  dispatch({type: SET_ERROR,
  payload: error})
};

export function validateForm  (data)  {
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

export function searchCountry(searchName){
  return async (dispatch) => {
    try{
        const res = await axios.get(`http://localhost:3001/countries?name=${searchName}`);
        dispatch({ type: SEARCH_COUNTRY, payload: res.data });
    } catch(error){
      alert(error.message);
    }
  }
}

export function cacheCountry(){
  dispatch({ type: CACHE_COUNTRIES, payload: res.data });
}

export function cacheActivities(){
  dispatch({ type: CACHE_ACTIVITIES, payload: res.data });
}