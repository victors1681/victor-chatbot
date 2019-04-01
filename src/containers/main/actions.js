const types = {
  MAIN_INIT_REQUEST: "main/MAIN_INIT_REQUEST",
  MAIN_INIT_SUCCESS: "main/MAIN_INIT_SUCCESS",
  MAIN_INIT_FAILTURE: "main/MAIN_INIT_FAILURE"
};

export const mainInitRequest = () => ({
  type: types.MAIN_INIT_REQUEST
});
export const mainInitSuccess = payload => ({
  type: types.MAIN_INIT_SUCCESS,
  payload
});

export default types;
