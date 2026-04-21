import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import { ChatInput } from "@/components/ChatInput";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const Chat = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [chat, setChat] = useState<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const loadChat = () => {
    const chats = JSON.parse(localStorage.getItem("mamacare_demo_chats") || "[]");
    const currentChat = chats.find((c: any) => c.id === id);
    if (!currentChat) {
      navigate("/");
      return;
    }
    setChat(currentChat);
  };

  useEffect(() => {
    loadChat();
  }, [id]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <AppLayout>
      <div className="flex flex-col h-[calc(100vh-3.5rem)]">
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <AnimatePresence initial={false}>
              {chat?.messages.map((msg: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-4 ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-card border border-border rounded-tl-none shadow-sm"
                    }`}
                  >
                    {msg.role === "assistant" && (
                      <div className="flex items-center gap-2 mb-2 text-primary">
                        <Heart className="w-4 h-4 fill-current" />
                        <span className="text-xs font-bold uppercase tracking-wider">MamaCare AI</span>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="p-4 bg-background/80 backdrop-blur-md border-t border-border">
          <div className="max-w-3xl mx-auto">
            <ChatInput chatId={id} onMessageSent={loadChat} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Chat;