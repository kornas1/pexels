export const SET_SEARCH_ITEM = "SET_SEARCH_ITEM";

export interface Params{
    search: string
}

export const setSearchItem = (params: Params) => ({
  type: SET_SEARCH_ITEM,
  payload: params,
});
