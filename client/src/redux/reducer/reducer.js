import { GET_COUNTRIES, SET_PAGE } from '../actions/actions'


const initialState = {
    countries: [],
    page: 0
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COUNTRIES:
        return{
          ...state,
          countries: action.payload
        };
      case SET_PAGE:{
        return{
          ...state,
          page: action.payload
        }
      };
      default:
        return state;
  };
}
  
// console.log('State',action.payload)

  export default reducer;
  