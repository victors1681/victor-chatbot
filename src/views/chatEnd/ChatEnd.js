import React, { useRef, useContext, useEffect } from "react";
import {
  Header,
  SubHeader,
  CodeWrapper,
  CodeHeader,
  Code,
  CopyButton,
  FooterWrapper,
  FooterHeader,
  FooterContent,
  Card,
  TooltipWrapper,
  Tooltiptext
} from "./ChatEnd.styled";
import { IoIosWarning } from "react-icons/io";
import ChatContext from "../../contexts/ChatContext";

const ChatEnd = ({ match }) => {
  const chatContext = useContext(ChatContext);
  const { code } = chatContext;

  const codeRef = useRef();
  const toolTipRef = useRef();

  const copyCode = () => {
    codeRef.current.select();
    document.execCommand("copy");
    toolTipRef.current.innerHTML = "Code copied";
  };

  return (
    <Card>
      <Header>Thanks</Header>
      <SubHeader>for completing this task</SubHeader>
      <CodeWrapper>
        <CodeHeader> Your completion code: </CodeHeader>
        <Code
          ref={codeRef}
          type="text"
          onClick={copyCode}
          defaultValue={code}
          readOnly
        />
        <TooltipWrapper>
          <CopyButton onClick={copyCode}>
            <Tooltiptext ref={toolTipRef}>Copy to clipboard</Tooltiptext>
            Copy
          </CopyButton>
        </TooltipWrapper>
      </CodeWrapper>
      <FooterWrapper>
        <FooterHeader>
          <IoIosWarning />
          Next Step
        </FooterHeader>
        <FooterContent>
          Please copy and paste this code in Mechanical Turk task, otherwise it
          won't be completed
        </FooterContent>
      </FooterWrapper>
    </Card>
  );
};

export default ChatEnd;
