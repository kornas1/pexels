import {getImagesMain} from "../api/main";
import {call, put} from "redux-saga/effects";
import {
    GET_MAIN_IMAGES_ERROR,
    GET_MAIN_IMAGES,
    GET_MAIN_IMAGES_SUCCESS
} from "../constants/actions";


export function* getMainImages(params) {
    console.log(params)
    yield put({type: GET_MAIN_IMAGES});
    try {
        const response = yield call(getImagesMain, params.payload);
        const {success, results} = response;
        if (success) {
            console.log(results);
            yield put({type: GET_MAIN_IMAGES_SUCCESS, payload: results});
        }
    } catch (error) {
        console.log(error);
        yield put({type: GET_MAIN_IMAGES_ERROR});
    }
}