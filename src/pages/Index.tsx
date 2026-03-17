import { motion } from "framer-motion";
import { AppLayout } from "@/components/AppLayout";
import { ChatInput } from "@/components/ChatInput";
import { QuickActions } from "@/components/QuickActions";
import { PregnancyProgressCard } from "@/components/PregnancyProgressCard";
import { HealthSummaryCard } from "@/components/HealthSummaryCard";
import { DailyRecommendationsCard } from "@/components/DailyRecommendationsCard";
import { AppointmentCard } from "@/components/AppointmentCard";

const Index = () => {
  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
            Hi Sarah 👋
          </h1>
          <p className="text-muted-foreground mt-1 text-base">
            How can I support your pregnancy journey today?
          </p>
        </motion.div>

        {/* Chat Input */}
        <div className="mb-6 max-w-2xl">
          <ChatInput />
        </div>

        {/* Quick Actions */}
        <div className="mb-10">
          <QuickActions />
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <PregnancyProgressCard />
          <HealthSummaryCard />
          <DailyRecommendationsCard />
          <AppointmentCard />
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
