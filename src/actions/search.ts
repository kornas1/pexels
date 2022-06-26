import {ActionTypesSearch} from "../types/types";
import {SET_SEARCH_ITEM} from "../constants/actions"

export const setSearchItem = (params: string):ActionTypesSearch => ({
  type: SET_SEARCH_ITEM,
  payload: params,
});
