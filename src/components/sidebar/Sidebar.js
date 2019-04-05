import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import ChatContext from "../../contexts/ChatContext";
import {
  SidebarWrapper,
  DisplayUser,
  UserLabel,
  InstructionsWrapper,
  Header,
  Instruction,
  ActionWrapper,
  GoalHeader,
  TurnsHeader,
  DoneButtn
} from "./Sidebar.style.js";

const Sidebar = () => {
  const userContext = useContext(UserContext);
  const chatContext = useContext(ChatContext);
  return (
    <SidebarWrapper>
      <DisplayUser>{userContext.name}</DisplayUser>
      <UserLabel>USER</UserLabel>
      <Header>Instructions:</Header>
      <InstructionsWrapper>
        <Instruction>
          Please complete 8 interactions with Amelia, when finished click on the
          Done button.
        </Instruction>
        <ActionWrapper />
        <GoalHeader>Goal: 8 Turns </GoalHeader>
        <TurnsHeader>So far: {chatContext.turns} turns</TurnsHeader>
        <DoneButtn>Done</DoneButtn>
      </InstructionsWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
