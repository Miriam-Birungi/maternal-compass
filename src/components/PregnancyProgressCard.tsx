import { motion } from "framer-motion";
import { Baby } from "lucide-react";

export function PregnancyProgressCard() {
  const currentWeek = 12;
  const trimester = "First Trimester";
  const progress = (currentWeek / 40) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="card-soft"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-display font-semibold text-foreground text-base">
            Week {currentWeek}
          </h3>
          <p className="text-sm text-muted-foreground">{trimester}</p>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
          <Baby className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="mb-3">
        <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
          <span>Progress</span>
          <span>{currentWeek}/40 weeks</span>
        </div>
        <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="h-full bg-primary rounded-full"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>🍋</span>
        <span>Baby is the size of a lemon</span>
      </div>
      <ul className="mt-3 space-y-1.5 text-sm text-foreground">
        <li className="flex items-start gap-2"><span className="text-success">✓</span> Organs are fully formed</li>
        <li className="flex items-start gap-2"><span className="text-success">✓</span> Nausea may start to ease</li>
        <li className="flex items-start gap-2"><span className="text-success">✓</span> First ultrasound window</li>
      </ul>
    </motion.div>
  );
}
