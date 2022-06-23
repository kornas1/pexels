import { getImagesCategory } from "../api/category";
import { call, put, takeEvery} from "redux-saga/effects";
 export const GET_CATEGORY_IMAGES = "GET_CATEGORY_IMAGES";
export const GET_CATEGORY_IMAGES_SUCCESS = "GET_CATEGORY_IMAGES_SUCCESS";
export const GET_CATEGORY_IMAGES_ERROR = "GET_CATEGORY_IMAGES_ERROR";

export const FETCH_IMAGES = "FETCH_IMAGES";


export const fetchImages=()=>({type: FETCH_IMAGES});

export function* getCategoryImages(params){
    yield put({ type: GET_CATEGORY_IMAGES });
    try {
      const response = yield call(getImagesCategory, params.payload);

      const { success, results } = response;
      if (success) {
        yield put({ type: GET_CATEGORY_IMAGES_SUCCESS, payload: results });
      }
    } catch (error) {
      console.log(error);
      yield put({ type: GET_CATEGORY_IMAGES_ERROR });
    }
  };

  export function* getCategoryImagesWatcher(){
    yield takeEvery(FETCH_IMAGES, getCategoryImages)
  };