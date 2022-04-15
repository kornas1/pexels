import { SET_SEARCH_TERM } from './types';
//устанавливает значение внутри стора 
export const setSearchTerm = (searchTerm) => ({
    type: SET_SEARCH_TERM,
    searchTerm
});