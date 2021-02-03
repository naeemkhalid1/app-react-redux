import {createStore, applyMiddleware,compose} from "redux";
import rootReducer from "../reducers/rootReducers";
import { createLogger } from "redux-logger";
import createSagaMiddleware  from "redux-saga";
import rootSaga  from "../sagas/IndexSagas";
import thunk from 'redux-thunk'
// import posts from '../reducers/onPageLoad'


const logger=createLogger();
const saga= createSagaMiddleware();

const Store=createStore(rootReducer,
    undefined,applyMiddleware(logger,saga));
    saga.run(rootSaga);
export default Store;