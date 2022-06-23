import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import {getMainImagesWatcher} from '../src/actions/main';
import {getCategoryImagesWatcher} from '../src/actions/category';
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./reducers/rootReducer";
//import {rootWatcher} from "../src/rootWatcher";

const sagaMiddleware= createSagaMiddleware();

const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

const store = configureStore();
export default store;

console.log(getMainImagesWatcher)
sagaMiddleware.run(getMainImagesWatcher);
