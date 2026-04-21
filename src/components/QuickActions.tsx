import { motion } from "framer-motion";
import { Baby, Apple, Moon, Stethoscope, CalendarDays } from "lucide-react";

const actions = [
  {
    label: "What's happening this week?",
    icon: Baby,
    bgGradient: "from-red-400 to-pink-500",
    textColor: "text-white",
  },
  {
    label: "What should I eat today?",
    icon: Apple,
    bgGradient: "from-emerald-400 to-teal-500",
    textColor: "text-white",
  },
  {
    label: "Is my sleep normal?",
    icon: Moon,
    bgGradient: "from-violet-400 to-indigo-500",
    textColor: "text-white",
  },
  {
    label: "Check my symptoms",
    icon: Stethoscope,
    bgGradient: "from-orange-400 to-red-400",
    textColor: "text-white",
  },
  {
    label: "Next clinic visit?",
    icon: CalendarDays,
    bgGradient: "from-amber-400 to-yellow-500",
    textColor: "text-white",
  },
];

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.35 }}
    >
      <h2 className="font-display text-xs font-semibold tracking-widest text-muted-foreground uppercase text-center mb-4">
        Quick Actions
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {actions.map((action, index) => (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05 * index, duration: 0.3 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className={`inline-flex items-center gap-2.5 px-5 py-3 text-sm font-semibold rounded-full bg-gradient-to-r ${action.bgGradient} ${action.textColor} shadow-md hover:shadow-lg transition-all duration-200 hover:brightness-110`}
          >
            <action.icon className="w-5 h-5" />
            {action.label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
