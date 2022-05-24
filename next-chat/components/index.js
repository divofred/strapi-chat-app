import React, { useEffect, useState } from "react";
import { Input } from "antd";
import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.min.css";
import Header from "./Header";
import Messages from "./Messages";
import List from "./List";
import socket from "socket.io-client";
import {
  ChatContainer,
  StyledContainer,
  ChatBox,
  StyledButton,
  SendIcon,
} from "../pages/chat/styles";

function ChatRoom({ username, id }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   if (Object.keys(joinData).length > 0) {
  //     setMessages([joinData]);

  //     socket.on("message", (message, error) => {
  //       setMessages((msgs) => [...msgs, message]);
  //     });

  //     socket.on("roomInfo", (users) => {
  //       setUsers(users);
  //     });
  //   } else {
  //     history.push("/join");
  //   }
  // }, [joinData]);
  const io = socket("http://localhost:1337");
  let welcome;
  useEffect(() => {
    io.on("disconnect", () => {
      io.off();
      location.replace("http://localhost:3000/");
      console.log("disconnected");
    });
    io.emit("join", { username }, (error) => {
      if (error) return alert(error);
    });
    io.on("welcome", async (data, error) => {
      let welcomeMessage = {
        user: data.user,
        message: data.text,
      };
      welcome = welcomeMessage;
      setMessages([welcomeMessage]);
      await fetch("http://localhost:1337/api/messages")
        .then(async (res) => {
          const response = await res.json();
          let arr = [welcome];
          response.data.map((one, i) => {
            arr = [...arr, one.attributes];
            setMessages((msgs) => arr);
          });
        })
        .catch((e) => console.log(e.message));
    });
    io.on("roomData", async (data) => {
      await fetch("http://localhost:1337/api/active-users").then(async (e) => {
        setUsers(await e.json());
      });
    });
    io.on("message", async (data, error) => {
      await fetch("http://localhost:1337/api/messages")
        .then(async (res) => {
          const response = await res.json();
          let arr = [welcome];
          response.data.map((one, i) => {
            arr = [...arr, one.attributes];
            setMessages((msgs) => arr);
          });
        })
        .catch((e) => console.log(e.message));
    });
  }, [username]);
  // useEffect(() => {
  //   io.on("message", (data) => {
  //     setMessages((msg) => [...msg, data]);
  //     console.log("message", messages);
  //   });
  // }, [users]);
  const sendMessage = (message) => {
    if (message) {
      io.emit("sendMessage", { message, user: username }, (error) => {
        if (error) {
          alert(error);
        }
      });
      setMessage("");
    } else {
      alert("Message can't be empty");
    }
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    sendMessage(message);
  };

  return (
    <ChatContainer>
      <Header room="Group Chat" />
      <StyledContainer>
        <List users={users} id={id} username={username} />
        <ChatBox>
          <Messages messages={messages} username={username} />
          <Input
            type="text"
            placeholder="Type your message"
            value={message}
            onChange={handleChange}
          />
          <StyledButton onClick={handleClick}>
            <SendIcon>
              <i className="fa fa-paper-plane" />
            </SendIcon>
          </StyledButton>
        </ChatBox>
      </StyledContainer>
    </ChatContainer>
  );
}

export default ChatRoom;
