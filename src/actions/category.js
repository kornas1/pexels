import {getImagesCategory} from "../api/category";
import {call, put} from "redux-saga/effects";
import {
    GET_CATEGORY_IMAGES,
    GET_CATEGORY_IMAGES_ERROR,
    GET_CATEGORY_IMAGES_SUCCESS
} from "../constants/actions";


export const FETCH_IMAGES = "FETCH_IMAGES";


export const fetchImages = () => ({type: FETCH_IMAGES});

export function* getCategoryImages(params) {
    yield put({type: GET_CATEGORY_IMAGES});
    try {
        const response = yield call(getImagesCategory, params.payload);

        const {success, results} = response;
        if (success) {
            yield put({type: GET_CATEGORY_IMAGES_SUCCESS, payload: results});
        }
    } catch (error) {
        console.log(error);
        yield put({type: GET_CATEGORY_IMAGES_ERROR});
    }
} 