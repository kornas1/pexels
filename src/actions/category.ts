import { PhotoTypes } from './../types/types';
import {getImagesCategory} from "../api/category";
import {call, put} from "redux-saga/effects";
import {TypesActions, TypeGetMain, ActionTypesMain, GetImages} from "../types/types";
import {
  GET_CATEGORY_IMAGES,
  GET_CATEGORY_IMAGES_ERROR,
  GET_CATEGORY_IMAGES_SUCCESS,
} from "../constants/actions";


export function* getCategoryImages(params: ActionTypesMain): Generator<TypesActions|ActionTypesMain|TypeGetMain, void, TypesActions> {
  console.log(params)
  yield put({type: GET_CATEGORY_IMAGES});
  try {
    const response = yield call<GetImages>(getImagesCategory, params.payload as unknown as FormData);

    const {success, results} = response;
    if (success) {
      yield put({type: GET_CATEGORY_IMAGES_SUCCESS, payload: results});
    }
  } catch (error) {
    console.log(error);
    yield put({type: GET_CATEGORY_IMAGES_ERROR});
  }
}
