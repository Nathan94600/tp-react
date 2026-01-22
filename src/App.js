import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Appel de l'API Vercel
    fetch("/api/hello")  // ou "https://TON_SITE.vercel.app/api/hello"
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Front React + API Vercel</h1>
      <p>Message depuis l’API : {message}</p>
    </div>
  );
}

export default App;
