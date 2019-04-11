import styled from "styled-components";
import { CardButton } from "common/styles/common.styled.js";
import { Link } from "react-router-dom";

export const SidebarWrapper = styled.div`
  border-spacing: 110px 20px;
  padding: 5px;
  width: 100%;
  border-bottom: 1px solid #dedede;

  @media (min-width: 1281px) {
    border-left: 1px solid #dedede;
    border-bottom: none;
    margin-top: 100px;
    margin-bottom: 100px;
    padding: 20px;
  }
`;

export const DisplayUser = styled.div`
  border-bottom: 1px solid #e2e2e2;
  padding: 15px;
  text-align: center;
  font-size: 26px;
`;
export const UserLabel = styled.div`
  color: gray;
  text-align: center;
  font-size: 10px;
  padding: 10px;
  display: none;
  @media (min-width: 1281px) {
    display: auto;
  }
`;

export const Header = styled.h4`
  color: gray;
  text-transform: uppercase;
  font-size: 10px;
  display: none;

  @media (min-width: 1281px) {
    display: auto;
  }
`;
export const InstructionsWrapper = styled.div`
  padding: 0px 10px 10px;
  display: flex;

  @media (min-width: 1281px) {
    flex-direction: column;
  }
`;

export const Instruction = styled.div`
  font-size: 12px;
  display: none;

  @media (min-width: 1281px) {
    display: auto;
  }
`;
export const ActionWrapper = styled.div`
  padding: 15px;
`;
export const GoalHeader = styled.h5`
  color: gray;
  text-transform: uppercase;
`;

export const TurnsHeader = styled.h5`
  color: gray;
  text-transform: uppercase;
  font-weight: 300;
`;

export const TunsContainer = styled.div`
  display: column;
  @media (min-width: 1281px) {
    display: row;
    text-align: center;
  }
`;

const isTurnDisabled = props => props.disable.turns < props.disable.turnsGoal;

export const DoneButton = styled(CardButton)`
  text-align: center;
  text-decoration: none;
  opacity: ${props => (isTurnDisabled(props) ? 0.5 : 1)};
  pointer-events: ${props => (isTurnDisabled(props) ? "none" : "auto")};
  width: 80px;
  @media (min-width: 1281px) {
    width: 100%;
    margin-top: auto;
  }
`;
