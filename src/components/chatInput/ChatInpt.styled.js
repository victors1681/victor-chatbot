import styled from "styled-components";
import { IoIosPaperPlane } from "react-icons/io";
import { Field } from "formik";

export const InputWrapper = styled.div`
  margin: 10px;
  position: relative;
`;

export const InputText = styled(Field)`
  padding: 20px;
  width: 100%;
  border: 0px;
  background: #ffffff;
  box-shadow: 0 2px 5px 0 rgba(223, 223, 228, 0.5),
    0 1px 1px 0 rgba(174, 174, 174, 0.1);
  border-radius: 31px;
  letter-spacing: 0.05em;
  font-size: 16px;
  font-weight: 300;
  padding-left: 30px;
  color: #535458;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:focus {
    outline: none;

    box-shadow: 0 10px 15px 0 rgba(223, 223, 228, 0.8),
      0 1px 1px 0 rgba(174, 174, 174, 0.1);
  }
  &:disabled {
    cursor: auto;
    transform: none;
    opacity: 0.5;
  }
`;

export const SendIcon = styled(IoIosPaperPlane)`
  color: white;
  font-size: 20px;
`;
export const SendBtn = styled.button`
  right: 0px;
  margin: 10px;
  height: 40px;
  width: 40px;
  position: absolute;
  border-radius: 50%;
  border: 0px;
  background-image: radial-gradient(60% -13%, #73deff 67%, #43c7ff 100%);

  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 8px 21px 9px rgba(29, 151, 251, 0.35);
    transform: scale(1.3, 1.3);
  }
  &:disabled {
    cursor: auto;
    transform: none;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
