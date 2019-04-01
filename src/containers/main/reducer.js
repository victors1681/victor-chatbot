import types from "./actions";

const initialState = {
  request: false,
  success: false,
  failure: false,
  response: null
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case types.MAIN_INIT_REQUEST:
      return { ...state, request: true, failure: false, success: false };
    case types.MAIN_INIT_SUCCESS:
      return {
        ...state,
        request: false,
        success: true,
        failure: false,
        response: action.payload
      };
    case types.MAIN_INIT_FAILTURE:
      return { ...state, success: false, request: false, failure: true };
    default:
      return state;
  }
};

export const getMainState = fullState => fullState.main;

export default main;
