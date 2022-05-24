import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import ChatRoom from "../../components/index";

export default function Chat() {
  const router = useRouter();
  const SECRET = "this is a secret"; // JWT Secret
  const [done, setDone] = useState("");
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [userr, setUserr] = useState("");

  const token = router.query.token; // Getting the token from the URL
  useEffect(() => {
    if (!router.isReady) return console.log("Loading... Please wait"); // Checking if the token has been fetched from the URL.
    try {
      const payload = jwt.verify(token, SECRET); // Verifying the token using the secret
      async function fetchData() {
        await fetch(`http://localhost:1337/api/accounts/${payload.id}`)
          .then(async (e) => {
            const account = await e.json();
            setUsername(account.data.attributes.username);
            setId(account.data.id);
            setUserr(done);
            if (token !== account.data.attributes.token) {
              return router.push("/");
            }
          })
          .catch((e) => {
            console.log(e.message);
            return router.push("/");
          });
      }
      fetchData();
      setDone("done"); // granting access to the chat page
    } catch (error) {
      console.log("error", error.message);
      router.push("/"); // redirecting the user to the home page if an error occured
    }
  }, [token, userr, done]); // Listens for a change in token
  return (
    <div>
      {done == "done" && userr === "done" ? ( // Waiting for access to be granted
        <ChatRoom username={username} id={id} />
      ) : (
        <h1>Verifying token..... Please wait</h1>
      )}
    </div>
  );
}
