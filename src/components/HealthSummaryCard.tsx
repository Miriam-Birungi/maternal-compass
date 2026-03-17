import { motion } from "framer-motion";
import { Heart, Smile, AlertTriangle } from "lucide-react";

export function HealthSummaryCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="card-soft"
    >
      <h3 className="font-display font-semibold text-foreground text-base mb-4">Health Summary</h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center shrink-0 mt-0.5">
            <Heart className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Stay hydrated</p>
            <p className="text-xs text-muted-foreground">Aim for 8–10 glasses of water daily</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center shrink-0 mt-0.5">
            <Smile className="w-4 h-4 text-success" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Emotional wellbeing</p>
            <p className="text-xs text-muted-foreground">Mood swings are normal — take rest when needed</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-warning/10 flex items-center justify-center shrink-0 mt-0.5">
            <AlertTriangle className="w-4 h-4 text-warning" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Watch for</p>
            <p className="text-xs text-muted-foreground">Severe headaches, vision changes, or unusual swelling</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
