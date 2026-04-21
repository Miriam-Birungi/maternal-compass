import { useState, KeyboardEvent } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface ChatInputProps {
  chatId?: string;
  onMessageSent?: () => void;
}

const getMaternalHealthResponse = (userInput: string) => {
  const input = userInput.toLowerCase();
  if (input.includes("diet") || input.includes("eat") || input.includes("food")) {
    return "Maintaining a balanced diet is crucial. Focus on folic acid, iron, calcium, and protein. Avoid unpasteurized dairy and raw seafood to protect your baby's development.";
  }
  if (input.includes("exercise") || input.includes("workout") || input.includes("move")) {
    return "Moderate exercise like prenatal yoga or walking is generally beneficial. It helps with circulation and mood, but always consult your doctor to ensure it fits your specific pregnancy needs.";
  }
  if (input.includes("pain") || input.includes("cramp") || input.includes("bleeding")) {
    return "I'm concerned about your symptoms. While mild cramping can happen as the uterus expands, any sharp pain or bleeding should be reported to your healthcare provider immediately. Please seek medical attention.";
  }
  return "As your MamaCare assistant, I'm here for maternal health support. Regarding your pregnancy journey, remember to stay hydrated, take your prenatal vitamins, and track your baby's kicks once you reach the second trimester. How else can I assist with your health today?";
};

export function ChatInput({ chatId, onMessageSent }: ChatInputProps) {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (!value.trim()) return;

    const existingChats = JSON.parse(localStorage.getItem("mamacare_demo_chats") || "[]");
    const userMessage = { role: "user", content: value, timestamp: new Date().toISOString() };
    const assistantMessage = { role: "assistant", content: getMaternalHealthResponse(value), timestamp: new Date().toISOString() };

    if (chatId) {
      // Update existing chat
      const updatedChats = existingChats.map((c: any) => 
        c.id === chatId ? { ...c, messages: [...c.messages, userMessage, assistantMessage] } : c
      );
      localStorage.setItem("mamacare_demo_chats", JSON.stringify(updatedChats));
      if (onMessageSent) onMessageSent();
    } else {
      // Create new chat
      const newId = Date.now().toString();
      const newChat = {
        id: newId,
        title: value.length > 25 ? value.substring(0, 25) + "..." : value,
        messages: [userMessage, assistantMessage]
      };
      localStorage.setItem("mamacare_demo_chats", JSON.stringify([newChat, ...existingChats]));
      navigate(`/chat/${newId}`);
    }

    setValue("");
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.4 }}
      className="w-full"
    >
      <div className="relative glow-primary rounded-full border border-border bg-card">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about your health, baby growth, symptoms…"
          className="w-full bg-transparent rounded-full py-4 pl-6 pr-14 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none font-body"
        />
        <button 
          onClick={handleSend}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
