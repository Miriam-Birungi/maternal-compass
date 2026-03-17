import { motion } from "framer-motion";

const actions = [
  "What is happening this week?",
  "What should I eat today?",
  "Is my sleep normal?",
  "Check my symptoms",
  "When is my next clinic visit?",
];

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.35 }}
      className="flex flex-wrap gap-2"
    >
      {actions.map((action) => (
        <button
          key={action}
          className="px-4 py-2 text-sm rounded-full border border-border bg-card text-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-body"
        >
          {action}
        </button>
      ))}
    </motion.div>
  );
}
