import { AppLayout } from "@/components/AppLayout";
import { motion } from "framer-motion";
import { User, Bell, Shield, CircleHelp, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Settings = () => {
  const demoUser = JSON.parse(localStorage.getItem("mamacare_demo_user") || "null");

  const settingsSections = [
    {
      title: "Account",
      icon: User,
      items: [
        { label: "Profile Information", value: demoUser?.user_metadata?.full_name || "Demo User" },
        { label: "Email", value: demoUser?.email || "demo@example.com" },
      ],
    },
    {
      title: "Preferences",
      icon: Bell,
      items: [
        { label: "Notifications", value: "Enabled" },
        { label: "Daily Reminders", value: "8:00 AM" },
      ],
    },
    {
      title: "Security",
      icon: Shield,
      items: [
        { label: "Privacy Policy", value: "" },
        { label: "Terms of Service", value: "" },
      ],
    },
  ];

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your account and preferences</p>
        </motion.div>

        <div className="space-y-6">
          {settingsSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="card-soft overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <section.icon className="w-4 h-4 text-primary" />
                </div>
                <h2 className="font-display font-semibold text-lg">{section.title}</h2>
              </div>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <button key={item.label} className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-accent transition-colors text-left group">
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                    <div className="flex items-center gap-2">
                      {item.value && <span className="text-xs text-muted-foreground">{item.value}</span>}
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Settings;