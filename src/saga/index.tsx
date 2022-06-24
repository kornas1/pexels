import {takeEvery, all} from 'redux-saga/effects';
import {getMainImages} from "../actions/main";
import {getCategoryImages} from "../actions/category";
import {FETCH_IMAGES, FETCH_MAIN} from "../constants/actions";

function* watchAll() {
    yield all([
        takeEvery(FETCH_IMAGES, getCategoryImages),
        takeEvery(FETCH_MAIN, getMainImages)
    ]);
}

export default watchAll;