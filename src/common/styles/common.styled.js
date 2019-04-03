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
  height: 80%;
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
