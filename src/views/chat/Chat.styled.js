import styled from "styled-components";
import { Card } from "common/styles/common.styled";

export const ChatWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
`;

export const LeftPanel = styled.div`
    position: inherit;
    left 0;
    width: 70%;
`;

export const ChatBoxWrapper = styled.div`
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const RightPanel = styled.div`
  
    position: inherit;
    right 0;
    width: 30%;
    display: flex;
`;
