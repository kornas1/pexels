import { getImagesMain } from "../api/main";
import { call, put, takeEvery} from "redux-saga/effects";
 export const GET_MAIN_IMAGES = "GET_MAIN_IMAGES";
export const GET_MAIN_IMAGES_SUCCESS = "GET_MAIN_IMAGES_SUCCESS";
export const GET_MAIN_IMAGES_ERROR = "GET_MAIN_IMAGES_ERROR";

export const FETCH_MAIN = "FETCH_MAIN";


// export const fetchMainImages=()=>({type: FETCH_MAIN_IMAGES});


 export function* getMainImages(params){
  console.log(params)
    yield put({ type: GET_MAIN_IMAGES });
    try {
      const response = yield call(getImagesMain, params.payload);
      const { success, results } = response;
      if (success) {
        console.log(results);
        yield put({ type: GET_MAIN_IMAGES_SUCCESS, payload: results });
      }
    } catch (error) {
      console.log(error);
      yield put({ type: GET_MAIN_IMAGES_ERROR });
    }
  };

  export function* getMainImagesWatcher(){
       yield takeEvery("FETCH_MAIN", getMainImages)
     };