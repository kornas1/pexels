import * as types from "../constants/actions";
import {PhotoMain, ActionTypesCreator} from "../types";

const initialState: PhotoMain = {
  data: [],
  per_page: 0,
  total_results: 0,
  page: 1,
  next_page: null,
  loading: false,
};

const categoryReducer = (state = initialState, action: ActionTypesCreator):PhotoMain => {
  switch (action.type) {
    case types.GET_CATEGORY_IMAGES:
      return {
        ...state,
        loading: true,
      };
    case types.GET_CATEGORY_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        page: action.payload.page,
        data:
          action.payload.page === 1
            ? action.payload.photos
            : [...state.data, ...action.payload.photos],
        per_page: action.payload.per_page,
        total_results: action.payload.total_results,
        next_page: action.payload.next_page,
      };
    case types.GET_CATEGORY_IMAGES_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default categoryReducer;
