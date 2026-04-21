import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    q: "Is it normal to feel tired all the time in the first trimester?",
    a: "Yes, fatigue is very common in the first trimester due to rising progesterone levels and increased blood production. Rest when you can and maintain a balanced diet.",
    bgGradient: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
    accentColor: "hover:from-blue-100 hover:to-cyan-100",
  },
  {
    q: "What foods should I avoid during pregnancy?",
    a: "Avoid raw or undercooked meat, unpasteurized dairy, high-mercury fish, and excessive caffeine. Always wash fruits and vegetables thoroughly.",
    bgGradient: "from-rose-50 to-pink-50",
    borderColor: "border-rose-200",
    accentColor: "hover:from-rose-100 hover:to-pink-100",
  },
  {
    q: "When should I schedule my first prenatal visit?",
    a: "Most healthcare providers recommend scheduling your first prenatal visit around 8 weeks of pregnancy, or as soon as you confirm your pregnancy.",
    bgGradient: "from-amber-50 to-orange-50",
    borderColor: "border-amber-200",
    accentColor: "hover:from-amber-100 hover:to-orange-100",
  },
  {
    q: "How much weight gain is normal during pregnancy?",
    a: "For a normal BMI, 25–35 pounds is typical over the full pregnancy. Your healthcare provider can give personalized guidance based on your starting weight.",
    bgGradient: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-200",
    accentColor: "hover:from-emerald-100 hover:to-teal-100",
  },
];

export function CommonQuestions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="max-w-2xl mx-auto"
    >
      <h2 className="font-display text-xs font-semibold tracking-widest text-muted-foreground uppercase text-center mb-4">
        Common Questions
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {questions.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i, duration: 0.3 }}
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <AccordionItem
              value={`q-${i}`}
              className={`bg-gradient-to-r ${item.bgGradient} ${item.borderColor} border-2 px-6 py-0 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md ${item.accentColor}`}
            >
              <AccordionTrigger className="text-sm text-foreground font-semibold hover:no-underline py-4 hover:text-foreground/80 transition-colors">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
}
