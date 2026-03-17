import { motion } from "framer-motion";
import { CalendarDays, Clock } from "lucide-react";

const appointments = [
  { title: "Ultrasound Scan", date: "Mar 22, 2026", time: "10:00 AM", upcoming: true },
  { title: "Blood Test", date: "Apr 5, 2026", time: "9:30 AM", upcoming: false },
];

export function AppointmentCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="card-soft"
    >
      <h3 className="font-display font-semibold text-foreground text-base mb-4">Upcoming Appointments</h3>
      <div className="space-y-3">
        {appointments.map((apt) => (
          <div
            key={apt.title}
            className={`flex items-start gap-3 p-3 rounded-2xl ${apt.upcoming ? "bg-secondary" : "bg-muted/50"}`}
          >
            <div className="w-8 h-8 rounded-xl bg-card flex items-center justify-center shrink-0 mt-0.5">
              <CalendarDays className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{apt.title}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                <span>{apt.date}</span>
                <Clock className="w-3 h-3" />
                <span>{apt.time}</span>
              </div>
            </div>
            {apt.upcoming && (
              <span className="text-[10px] font-medium bg-primary text-primary-foreground px-2 py-0.5 rounded-full self-center">
                Next
              </span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
