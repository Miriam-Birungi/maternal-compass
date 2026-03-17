import { motion } from "framer-motion";
import { Apple, Droplets, Dumbbell } from "lucide-react";

const tips = [
  { icon: Apple, label: "Nutrition", tip: "Include iron-rich foods like spinach & lentils", color: "text-success" },
  { icon: Droplets, label: "Hydration", tip: "You've had 4 of 8 glasses today", color: "text-warning" },
  { icon: Dumbbell, label: "Exercise", tip: "Try a 20-min prenatal yoga session", color: "text-primary" },
];

export function DailyRecommendationsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="card-soft"
    >
      <h3 className="font-display font-semibold text-foreground text-base mb-4">Daily Recommendations</h3>
      <div className="space-y-3">
        {tips.map((item) => (
          <div key={item.label} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center shrink-0 mt-0.5">
              <item.icon className={`w-4 h-4 ${item.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.tip}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
