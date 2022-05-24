import React from "react";

function Header(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#2979FF",
        borderRadius: "4px 4px 0 0",
        height: "60px",
        width: "100%",
      }}
    >
      <div
        style={{
          flex: "0.5",
          display: "flex",
          alignItems: "center",
          marginLeft: "5%",
          color: "white",
        }}
      >
        <div
          style={{
            color: "#11ec11",
            marginrRight: "10px",
          }}
        >
          <i className="fa fa-circle" aria-hidden="true"></i>
        </div>
        <div>{props.room}</div>
      </div>
      <div
        style={{
          marginRight: "5%",
        }}
      >
        <a href="/">
          <div
            style={{
              fontSize: "20px",
              color: "#fff",
            }}
          >
            <i className="fa fa-times-circle" aria-hidden="true"></i>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Header;
