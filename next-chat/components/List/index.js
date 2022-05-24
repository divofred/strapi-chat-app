import React from "react";
import styled from "styled-components";
import { List as AntdList, Avatar } from "antd";
import socket from "socket.io-client";

function List(props) {
  const users = props.users.data;
  const handleClick = async (id, socketid) => {
    const io = socket("http://localhost:1337");
    await fetch("http://localhost:1337/api/active-users/" + id, {
      method: "Delete",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(async (e) => {
        io.emit("kick", { socketid }, (error) => {
          if (error) return alert(error);
        });
        setTimeout(() => location.reload(), 3000);
      })
      .catch((e) => location.reload());
  };
  return (
    <StyledList>
      <ListHeading>Active Users</ListHeading>
      <AntdList
        itemLayout="horizontal"
        dataSource={users}
        renderItem={(user) => (
          <AntdList.Item>
            <AntdList.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={user.attributes.users}
            />
            <button
              style={
                user.attributes.users === "Admin" || props.username !== "Admin"
                  ? { display: "none" }
                  : null
              }
              onClick={() => handleClick(user.id, user.attributes.socketid)}
            >
              Delete
            </button>
          </AntdList.Item>
        )}
      />
    </StyledList>
  );
}

export default List;

const StyledList = styled(AntdList)`
  margin-right: 10px;
  flex: 0 0 35%;
  padding: 20px;
  .ant-list-item-meta-content {
    flex-grow: 0;
  }
  h4 {
    font-size: 25px;
  }
  a {
    color: #097ef0;
  }
`;

const ListHeading = styled.div`
  color: #757591;
  font-size: 20px;
  font-style: oblique;
  border-bottom: 1px solid #757591;
`;
