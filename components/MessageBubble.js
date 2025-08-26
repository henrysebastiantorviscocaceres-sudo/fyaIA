export default function MessageBubble({ sender, text }) {
  const isUser = sender === "Tú";
  return (
    <div className={`max-w-[80%] p-2 rounded-xl ${isUser ? "bg-blue-500 text-white self-end ml-auto" : "bg-gray-200 text-gray-800 self-start mr-auto"}`}>
      <strong>{sender}:</strong> {text}
    </div>
  );
}
