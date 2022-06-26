import {getImagesMain} from "../api/main";
import {TypesActions, TypeGetMain, ActionTypesMain, GetImages} from "../types/types";
import {call, put} from "redux-saga/effects";
import {
    GET_MAIN_IMAGES_ERROR,
    GET_MAIN_IMAGES,
    GET_MAIN_IMAGES_SUCCESS
} from "../constants/actions";



export function* getMainImages(params: ActionTypesMain): Generator< TypesActions|ActionTypesMain|TypeGetMain, void, TypesActions> {
    console.log(params)
    yield put({type: GET_MAIN_IMAGES});
    try {
        const response = yield call<GetImages>(getImagesMain, params.payload  as unknown as FormData);
        const {success, results} = response;
        if (success) {
            yield put({type: GET_MAIN_IMAGES_SUCCESS, payload: results});
        }
    } catch (error) {
        console.log(error);
        yield put({type: GET_MAIN_IMAGES_ERROR});
    }
}