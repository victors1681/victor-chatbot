import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import ChatContext from "../../contexts/ChatContext";
import { Link } from "react-router-dom";
import {
  SidebarWrapper,
  DisplayUser,
  UserLabel,
  InstructionsWrapper,
  Header,
  Instruction,
  GoalHeader,
  TurnsHeader,
  DoneButton,
  TunsContainer
} from "./Sidebar.style.js";

const Sidebar = () => {
  const userContext = useContext(UserContext);
  const chatContext = useContext(ChatContext);

  const turnsGoal = 1;

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
        <TunsContainer>
          <GoalHeader>Goal: {turnsGoal} Turns </GoalHeader>
          <TurnsHeader>So far: {chatContext.turns} turns</TurnsHeader>
        </TunsContainer>
        <DoneButton
          as={Link}
          to="/survey"
          disable={{ turnsGoal, turns: chatContext.turns }}
        >
          Done
        </DoneButton>
      </InstructionsWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
