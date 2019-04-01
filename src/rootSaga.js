import { takeEvery, all } from "redux-saga/effects";
import mainSaga from "containers/main/saga";

const sagas = [mainSaga];

const rootSaga = sagaMiddleware => {
  sagas.forEach(saga => {
    sagaMiddleware.run(saga);
  });
};

export default rootSaga;
