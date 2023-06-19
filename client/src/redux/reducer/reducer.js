import { GET_COUNTRIES } from '../actions/actions'


const initialState = {
    countries: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COUNTRIES:
        return{
          ...state,
          countries: action.payload
        };
      default:
        return state;
  };
}
  
// console.log('State',action.payload)

  export default reducer;
  