import styled from "styled-components";
import {
  Card as CardWrapper,
  Header as OriginalHeader
} from "common/styles/common.styled.js";

export const Card = styled(CardWrapper)`
  width: 90%;

  min-width: 200px;
  margin: 10px;
  justify-content: center;

  @media (min-width: 1281px) {
    width: 40%;
    min-width: 450px;
  }
`;

export const Header = styled(OriginalHeader)`
  text-align: center;
  font-size: 25px;
  font-weight: 300;
  text-align: center;
  vertical-align: middle;
  margin-top: 20px;

  @media (min-width: 1281px) {
    margin-top: 100px;
  }
`;

export const Content = styled.div`
  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  @media (min-width: 1281px) {
    margin: 5% 15% 15% 15%;
  }
`;
