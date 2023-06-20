import { GET_COUNTRIES, SET_PAGE,NEXT_PAGE, PREV_PAGE, SORT_COUNTRIES, SORT_COUNTRIES_DESCENDING } from "../actions/actions";

const initialState = {
  countries: [],
  page: 0,
  itemsPerPage: 10
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case SET_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case PREV_PAGE:
      return {
        ...state,
        page: state.page - 1,
      };
    case SORT_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    case SORT_COUNTRIES_DESCENDING: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    
    default:
      return state;
  }
};

// console.log('State',action.payload)

export default reducer;
