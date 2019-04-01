import { call, fork, put, takeEvery, select, all } from "redux-saga/effects";
import actionTypes, { mainInitSuccess } from "./actions";
import { getPost } from "./api";

function* mainRequest() {
  try {
    console.error("Requesting...");
    const post = yield call(getPost);

    yield put(mainInitSuccess({ payload: post }));
  } catch (e) {
    console.error(e);
  }
}

export function* watchForMain() {
  yield takeEvery(actionTypes.MAIN_INIT_REQUEST, mainRequest);
}

export default function* mainSaga() {
  yield all([watchForMain()]);
  //yield [fork(watchForMain)];
}
