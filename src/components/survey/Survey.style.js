import styled from "styled-components";
import { Field } from "formik";
import {
  Card,
  CardFooter,
  CardButton,
  Header as OriginalHeader
} from "common/styles/common.styled.js";

const tb = {};
tb.Table = styled.div`
  display: table;
  clear: both;
  table-layout: fixed;
  width: 100%;
  font-size: 13px;
`;

tb.Table.Header = styled.div`
  display: table-row;
  clear: both;
  empty-cells: show;
  width: 100%;
`;

tb.Table.Row = styled.div`
  display: table-row;
  clear: both;
  empty-cells: show;
  width: 100%;

  &:nth-child(odd) {
    background: #f7f7f7;
  }
`;

tb.Table.Column = styled.div`
  display: table-column;
  float: left;
  width: 14%;
  min-width: 14%;
  empty-cells: show;
  box-sizing: border-box;
  padding: 15px;
  text-align: center;
  &:nth-child(1) {
    width: 30%;
    text-align: right;
  }
`;

tb.Table.Footer = styled.div`
  display: table-row;
  clear: both;
  empty-cells: show;
  width: 100%;
`;

export const Table = tb.Table;

export const TextArea = styled(Field)`
  margin: 0px;
  width: 100%;
  height: 122px;
  border: 1px solid #cecece;
  border-radius: 9px;
  padding: 15px;
  resize: none;
  font-size: 14px;
  color: gray;
  font-weight: 300;
`;

export const DoneBtn = styled(CardButton)`
  width: 250px;
  box-shadow: none;
  margin-left: 15px;
`;

export const Header = styled(OriginalHeader)`
  font-size: 25px;
  font-weight: 300;
  vertical-align: middle;
  padding: 40px;
`;
