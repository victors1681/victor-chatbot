import { createAction } from "redux-actions";

const types = {
  MAIN_INIT_REQUEST: "main/MAIN_INIT_REQUEST",
  MAIN_INIT_SUCCESS: "main/MAIN_INIT_SUCCESS",
  MAIN_INIT_FAILTURE: "main/MAIN_INIT_FAILURE"
};

export const mainInitRequest = createAction(types.MAIN_INIT_REQUEST);
export const mainInitSuccess = createAction(types.MAIN_INIT_SUCCESS);
export const mainInitFailure = createAction(types.MAIN_INIT_FAILTURE);

export default types;
