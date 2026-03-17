import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export function ChatInput() {
  const [value, setValue] = useState("");

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
          placeholder="Ask about your health, baby growth, symptoms…"
          className="w-full bg-transparent rounded-full py-4 pl-6 pr-14 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none font-body"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
