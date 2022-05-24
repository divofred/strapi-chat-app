import React, { useEffect, useRef } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message/";
import styled from "styled-components";

function Messages(props) {
  const { messages, username: user } = props;
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <StyledMessages>
      {messages.map((message, i) => (
        <ScrollToBottom>
          <div key={i} ref={messagesEndRef}>
            <Message message={message} username={user} />
          </div>
        </ScrollToBottom>
      ))}
    </StyledMessages>
  );
}
export default Messages;

const StyledMessages = styled.div`
  padding: 5% 0;
  overflow: auto;
  flex: auto;
`;
