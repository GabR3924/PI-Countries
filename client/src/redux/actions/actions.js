import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const SET_PAGE = "SET_PAGE";


export function getCountries() {
    return async (dispatch) => {
        const res = await axios.get ("http://localhost:3001/countries");
        dispatch({ type:GET_COUNTRIES, payload: res.data })
    }
}

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});
