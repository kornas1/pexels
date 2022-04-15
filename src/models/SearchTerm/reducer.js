import { SET_SEARCH_TERM } from "./types";

const initialState = {
 searchTerm: '',
}
//обрабатывает логику экшона
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_TERM: 
            return {
                ...state,
                searchTerm: action.searchTerm
            }
        default: 
            return state;
    }
}

export default reducer;