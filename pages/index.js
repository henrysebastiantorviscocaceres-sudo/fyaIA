import { useState } from "react";
import { motion } from "framer-motion";
import MessageBubble from "../components/MessageBubble";

export default function Home() {
  const [messages, setMessages] = useState([
    { sender: "fyaIA 🤖", text: "Hola, soy fyaIA, tu asistente. ¿En qué puedo ayudarte?" }
  ]);
  const [input, setInput] = useState("");

  const aiResponses = [
    "Estoy pensando 🤔...",
    "Claro, te ayudo con eso 💡",
    "¿Quieres que te dé un ejemplo? 📘",
    "Interesante, cuéntame más 👀",
    "¡Perfecto! 🚀",
    "Eso suena genial 😃"
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: "Tú", text: input }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages(prev => [...prev, { sender: "fyaIA 🤖", text: randomResponse }]);
    }, 900);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-xl rounded-2xl flex flex-col h-[640px] p-4 border border-white/40">
        <div className="flex flex-col items-center mb-2">
          <img src="/logo.png" alt="fyaIA Logo" className="w-16 mb-2" />
          <h1 className="text-2xl font-bold">fyaIA</h1>
          <p className="text-xs text-gray-600">Asistente inspirado en Fe y Alegría 68</p>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 p-2">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              <MessageBubble sender={msg.sender} text={msg.text} />
            </motion.div>
          ))}
        </div>

        <div className="flex gap-2 mt-2">
          <input
            type="text"
            className="flex-1 border rounded-full p-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu mensaje..."
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition"
            aria-label="Enviar"
            title="Enviar"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
