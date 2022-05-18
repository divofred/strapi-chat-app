import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

export default function Chat() {
  const router = useRouter();
  const SECRET = "this is a secret"; // JWT Secret
  const [done, setDone] = useState("");

  const token = router.query.token; // Getting the token from the URL
  useEffect(() => {
    if (!router.isReady) return console.log("Loading... Please wait"); // Checking if the token has been fetched from the URL.
    try {
      const payload = jwt.verify(token, SECRET); // Verifying the token using the secret
      async function fetchData() {
        const data = await fetch(
          `http://localhost:1337/api/accounts/${payload.id}`
        );
        const account = await data.json();
        if (token !== account.data.attributes.token) return router.push("/");
        return;
      }
      fetchData();
      setDone("done"); // granting access to the chat page
    } catch (error) {
      router.push("/"); // redirecting the user to the home page if an error occured
    }
  }, [token]); // Listens for a change in token
  return (
    <div>
      {done !== "done" ? ( // Waiting for access to be granted
        <h1>Verifying token..... Please wait</h1>
      ) : (
        <h1> Group Chat</h1>
      )}
    </div>
  );
}
