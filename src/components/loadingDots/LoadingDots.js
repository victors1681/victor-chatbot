import React from "react";
import styled from "styled-components";
import "./style.scss";

const DotContainer = styled.div`
  float: right;
  display: inline-block;
  height: 10px;
  align-self: flex-end;
  margin-top: 20px;
  margin-right: 21px;
`;

const LoadingDots = () => <DotContainer className="dot-falling" />;
export default LoadingDots;
