import styled from "styled-components";
import {
  Card as CardWrapper,
  Header as OriginalHeader
} from "common/styles/common.styled.js";

export const Card = styled(CardWrapper)`
  width: 40%;
  min-width: 450px;

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) {
    width: 90% !important;
    height: 50% !important;
  }
`;

export const Header = styled(OriginalHeader)`
  text-align: center;
  font-size: 25px;
  font-weight: 300;
  text-align: center;
  vertical-align: middle;
  margin-top: 100px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin: 5% 15% 15% 15%;
  justify-content: center;
`;
