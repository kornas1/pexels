import * as types from "../actions/search";
import {SearchTypes, ActionTypesSearch} from "../types";

const initialState: SearchTypes = {
  search: "",
};

const searchReducer = (state = initialState, action: ActionTypesSearch) => {
  switch (action.type) {
    case types.SET_SEARCH_ITEM:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
