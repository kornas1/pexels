import * as types from "../actions/search";
import {SearchTypes, ActionTypesSearch} from "../types";

const initialState: SearchTypes = {
  search: "",
};

const searchReducer = (state = initialState, action: ActionTypesSearch):SearchTypes => {
  switch (action.type) {
    case types.SET_SEARCH_ITEM:

      return {search: action.payload}
        //  ...state,


    default:
      return state;
  }
};

export default searchReducer;
