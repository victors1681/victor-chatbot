import React from "react";
import { connect } from "react-redux";
import { mainInitRequest } from "./actions";
import { getMainState } from "./reducer";
import Main from "components/main";

const mapStateToProps = (state, ownProps) => ({
  init: getMainState(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onInit: () => dispatch(mainInitRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
