import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/index.js";
import rootSaga from "../sagas/index";

const sagaMiddleware = createSagaMiddleware();
// const store = compose(
//   applyMiddleware(sagaMiddleware),
//   window.devToolsExtension && window.devToolsExtension(),
// )(createStore)(rootReducer);

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
