import React from 'react';
import './ChatMessage.css'

const ChatMessage = (props) => {
  return (
    <div className="chat-messages">
      {props.message}
    </div>
  );
};

export default ChatMessage;