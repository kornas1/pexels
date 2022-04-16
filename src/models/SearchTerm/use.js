import { useDispatch, useSelector } from "react-redux";
import * as actions from './action'

export function useSearchTerm() {
    return useSelector((rootState) => {
        console.log(rootState, 'rootState')
        return rootState.searchTermState.searchTerm
    })
}

export function useSetSearchTerm() {
    const dispatch = useDispatch();

    return (searchTerm) => {
        console.log(actions.setSearchTerm(searchTerm), 'rootState')
        dispatch(actions.setSearchTerm(searchTerm))
    }
}