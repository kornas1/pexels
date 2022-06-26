//import * as types from "../actions/search";
import {SET_SEARCH_ITEM} from "../constants/actions"
import {SearchTypes, ActionTypesSearch} from "../types/types";

const initialState: SearchTypes = {
  search: "",
};

const searchReducer = (state = initialState, action: ActionTypesSearch):SearchTypes => {
  switch (action.type) {
    case SET_SEARCH_ITEM:
      return {search: action.payload}
    default:
      return state;
  }
};

export default searchReducer;

