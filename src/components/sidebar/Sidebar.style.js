import styled from "styled-components";
import { CardButton } from "common/styles/common.styled.js";

export const SidebarWrapper = styled.div`
  border-left: 1px solid #dedede;
  padding: 20px;
  border-spacing: 110px 20px;
  margin-top: 100px;
  margin-bottom: 100px;
  width: 100%;
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
`;

export const Header = styled.h4`
  color: gray;
  text-transform: uppercase;
  font-size: 10px;
`;
export const InstructionsWrapper = styled.div`
  padding: 0px 10px 10px;
`;

export const Instruction = styled.div`
  font-size: 12px;
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
export const DoneButtn = styled(CardButton)``;
