import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const sendPrompt = async () => {
    setLoading(true);
    setReply("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (data.reply) {
        setReply(data.reply);
      } else {
        setReply("Error: No response from server");
      }
    } catch (err) {
      setReply("Error: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>fyaIA</h1>
      <textarea
        style={{ width: "100%", height: 100 }}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Escribe tu pregunta..."
      />
      <button
        onClick={sendPrompt}
        style={{
          marginTop: 10,
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
      {reply && (
        <div style={{ marginTop: 20, whiteSpace: "pre-wrap" }}>
          <strong>Respuesta:</strong>
          <p>{reply}</p>
        </div>
      )}
    </div>
  );
}
