import React from "react";

const ChatBox = () => {
  return (
    <div class="chat-container">
      <div class="chat active-chat" data-chat="person4">
        <div class="conversation-start">
          <span>Yesterday, 4:20 PM</span>
        </div>
        <div class="bubble me">Hey human!</div>
        <div class="bubble me">Umm... Someone took a shit in the hallway.</div>
        <div class="bubble you">... what.</div>
        <div class="bubble you">Are you serious?</div>
        <div class="bubble me">I mean...</div>
        <div class="bubble me">It’s not that bad...</div>
      </div>

      <div class="write">
        <a href="javascript:;" class="write-link attach" />
        <input type="text" />
        <a href="javascript:;" class="write-link smiley" />
        <a href="javascript:;" class="write-link send" />
      </div>
    </div>
  );
};

export default ChatBox;
