import {
  GET_COUNTRIES,
  SET_PAGE,
  NEXT_PAGE,
  PREV_PAGE,
  SORT_COUNTRIES,
  SORT_COUNTRIES_DESCENDING,
  SORT_POPULATION,
  SORT_POPULATION_DESCENDING,
  SET_SELECTED_COUNTRY,
  SET_SELECTED_CONTINENT,
  GET_ACTIVITIES,
  POST_ACTIVITY,
  SET_ERROR,
  VALIDATE_FORM
} from "../actions/actions";

const initialState = {
  countries: [],
  page: 0,
  itemsPerPage: 10,
  selectedCountry: null,
  selectedContinent: "All",
  activities: [],
  error: ''
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
    case SORT_POPULATION: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    case SORT_POPULATION_DESCENDING: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    case SET_SELECTED_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload,
      };
    case SET_SELECTED_CONTINENT:
      return {
        ...state,
        selectedContinent: action.payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case POST_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
      };
      case SET_ERROR:
        return {
          ...state,
          error: action.payload
        }
    
    default:
      return state;
  }
};

export default reducer;
