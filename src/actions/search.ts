import {ActionTypesSearch} from "../types";
export const SET_SEARCH_ITEM = "SET_SEARCH_ITEM";

//{search:string}

// export interface Params{
//     search: string
// }

export const setSearchItem = (params: string):ActionTypesSearch => ({
  type: SET_SEARCH_ITEM,
  payload: params,
});
