import styled from "styled-components";
import {
  Card as OriginalCard,
  CardFooter,
  CardButton,
  Header as OriginalHeader
} from "common/styles/common.styled.js";

export const Card = styled(OriginalCard)`
  padding: 70px;
  width: 90%;

  @media (min-width: 1281px) {
    width: 40%;
  }
`;

export const Header = styled(OriginalHeader)`
  font-size: 25px;
  font-weight: 500;
  vertical-align: middle;
  padding: 40px 40px 5px 40px;
  text-align: center;
  margin-bottom: 0px;
`;
export const SubHeader = styled(OriginalHeader)`
  font-size: 20px;
  font-weight: 300;
  vertical-align: middle;
  text-align: center;
  padding: 5px;
  margin: 0px 30px 30px;
`;

export const CodeWrapper = styled.div`
  text-align: center;
`;

export const CodeHeader = styled.div`
  color: ${({ theme }) => theme.colors.gray};
`;

export const Code = styled.input`
  color: ${({ theme }) => theme.colors.success};
  font-size: 43px;
  font-weight: 500;
  text-align: center;
  margin: 15px;
  padding: 10px;
  border-color: ${({ theme }) => theme.colors.gray};
  border-style: dashed;
  border-radius: 16px;
  border-width: 1px;
  width: 90%;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const CopyButton = styled.button`
  border: ${({ theme }) => ` 1px solid ${theme.colors.gray}`};

  border-radius: 6px;
  padding: 6px 20px 6px 20px;
  color: ${({ theme }) => theme.colors.gray};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:active {
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const FooterWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-top: 30px;
`;

export const FooterHeader = styled.h3``;
export const FooterContent = styled.div``;

export const Tooltiptext = styled.span`
  visibility: hidden;
  width: 140px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`;

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${Tooltiptext} {
    visibility: visible;
    opacity: 1;
  }
`;
