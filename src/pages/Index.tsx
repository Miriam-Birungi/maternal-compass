import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import { ChatInput } from "@/components/ChatInput";
import { QuickActions } from "@/components/QuickActions";
import { PregnancyProgressCard } from "@/components/PregnancyProgressCard";
import { HealthSummaryCard } from "@/components/HealthSummaryCard";
import { CommonQuestions } from "@/components/CommonQuestions";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Baby, Heart, ArrowRight } from "lucide-react";

const Index = () => {
  const { user: supabaseUser, profile: supabaseProfile, loading } = useAuth();
  const navigate = useNavigate();
  
  // Fallback to demo user if Supabase is ignored
  const demoUser = JSON.parse(localStorage.getItem("mamacare_demo_user") || "null");
  const user = supabaseUser || demoUser;
  const profile = supabaseProfile || (demoUser ? { full_name: demoUser.user_metadata?.full_name } : null);
  const firstName = profile?.full_name?.split(" ")[0] || user?.email?.split("@")[0] || "there";

  const handleSignIn = () => {
    navigate("/auth?mode=signin");
  };

  const handleCreateAccount = () => {
    navigate("/auth?mode=signup");
  };

  if (loading) {
    return (
      <AppLayout>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Week badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium">
            <Baby className="w-4 h-4" />
            Week 12 · First Trimester
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-center mb-8"
        >
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Welcome to MamaCare 👋
          </h1>
          <p className="text-muted-foreground mt-2 text-base">
            {user
              ? `Hi ${firstName}! How can I support your pregnancy journey today?`
              : "How can I support your pregnancy journey today?"}
          </p>
        </motion.div>

        {/* Chat Input */}
        <div className="mb-6 max-w-2xl mx-auto">
          <ChatInput />
        </div>

        {/* Quick Actions */}
        <div className="mb-10 flex justify-center">
          <QuickActions />
        </div>

        {/* Common Questions */}
        <div className="mb-10">
          <CommonQuestions />
        </div>

        {/* Conditional Rendering: Auth Prompt or Dashboard Cards */}
        {!user ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            {/* Unlock Dashboard Card */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-8 flex flex-col justify-center items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Unlock Your Dashboard
              </h2>
              <p className="text-muted-foreground mb-8">
                Sign in to access personalized recommendations, appointment tracking, health summaries, and more to support your pregnancy journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                <Button
                  onClick={handleSignIn}
                  size="lg"
                  className="gap-2"
                >
                  Sign In
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  onClick={handleCreateAccount}
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  Create Account
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Dashboard Cards - Only shown when user is authenticated */
          // All dashboard cards have been removed as per request.
          // You can add new components here when needed.
          <div className="text-center text-muted-foreground mt-16">Your personalized dashboard content will appear here.</div>
        )}
      </div>
    </AppLayout>
  );
};

export default Index;
