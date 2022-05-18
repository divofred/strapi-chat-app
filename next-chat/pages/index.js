import styles from "../styles/Home.module.css";
import { useState } from "react";
import jwt from "jsonwebtoken";

export default function Home() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    const id = Math.trunc(Math.random() * 1000000);
    let account = {
      id,
    };
    const SECRET = "this is a secret";
    const token = jwt.sign(account, SECRET);
    let message = `http://localhost:3000/chat/${token}`;
    let data = {
      email, // User's email
      message,
    };

    let strapiData = {
      data: {
        id,
        username: user,
        email,
        token,
      },
    };
    await fetch("http://localhost:1337/api/accounts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(strapiData),
    })
      .then(async (res) => {
        console.log(await res.json());
      })
      .catch((err) => console.log(err.message));
    await fetch("/api/mail", {
      method: "POST", // POST request to /api//mail
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        console.log("fetching");
        if (res.status === 200) {
          console.log(await res.json());
        } else {
          console.log(await res.json());
        }
      })
      .catch((err) => console.log(err.message));
    setEmail("");
    setUser("");
  };
  return (
    <div className={styles.container}>
      <form className={styles.main}>
        <h1>Login</h1>
        <label htmlFor="user">Username: </label>
        <input
          type="text"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Getting the inputs
        />
        <br />
        <input type="submit" onClick={handlesubmit} />
      </form>
    </div>
  );
}
