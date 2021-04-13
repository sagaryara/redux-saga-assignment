import {
  LOAD_USER_FAIL,
  LOAD_USER_START,
  LOAD_USER_SUCCESS
} from "./constants";

const INTITIAL_STATE = {
  loading: false,
  users: [],
  errors: null
};

const reducer = (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_USER_START:
      return {
        ...state,
        loading: true
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      };
    case LOAD_USER_FAIL:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
