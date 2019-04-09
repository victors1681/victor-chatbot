import styled from "styled-components";
import { Field } from "formik";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size};
  color: ${({ theme }) => theme.font.color};
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Card = styled.div`
  width: 80%;
  //height: 80%;
  background: white;
  border-radius: 7px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.font.color};
  font-size: 16px;
`;

export const CardInput = styled(Field)`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;
  text-align: center;
  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.primary};
    outline: 0;
  }
`;

export const CardFooter = styled.div`
  margin-top: auto;
  text-align: right;
  display: flex;
  justify-content: center;
`;

export const CardButton = styled.button`
  display: block;
  margin-top: 10%;
  width: 100%;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
  &:disabled {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    cursor: auto;
    transform: none;
    opacity: 0.5;
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const CardLink = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  text-align: center;
  cursor: pointer;
  transition: color 0.25s ease-in;
  margin-top: auto;
  &:hover {
    color: #777;
  }
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? "salmon" : "papayawhip")}
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")}
  }
`;

export const Error = styled.div`
  color: ${({ theme }) => theme.colors.error};
  text-align: center;
  text-transform: lowercase;
  padding: 10px;
  font-weight: 600;
`;

export const SecundaryBtn = styled(CardButton)`
  width: 250px;
  color: ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.lightGray};
  border-color: ${({ theme }) => theme.colors.gray};
  box-shadow: none;
  text-align: center;
  text-decoration: none;
`;
