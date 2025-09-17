import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = { id: string; author: "you" | "support"; text: string };

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: crypto.randomUUID(), author: "support", text: "Hi! How can we help you today?" },
  ]);
  const [text, setText] = useState("");

  const send = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: Message = { id: crypto.randomUUID(), author: "you", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setText("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { id: crypto.randomUUID(), author: "support", text: "Thanks! Our team will get back shortly." },
      ]);
    }, 600);
  };

  return (
    <div className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold mb-6">Live Chat Support</h1>
      <div className="border rounded-lg h-[60vh] flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/20">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.author === "you" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[70%] px-3 py-2 rounded-lg text-sm ${msg.author === "you" ? "bg-primary text-primary-foreground" : "bg-card border"}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 border-t flex gap-2">
          <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type your message..." onKeyDown={(e) => { if (e.key === "Enter") send(); }} />
          <Button onClick={send}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;



