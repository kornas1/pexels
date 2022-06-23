import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./reducers/rootReducer";
//import {rootWatcher} from "../src/rootWatcher";
import rootSaga from './saga'

const sagaMiddleware= createSagaMiddleware();

const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
const store = configureStore();
export default store;

sagaMiddleware.run(rootSaga);