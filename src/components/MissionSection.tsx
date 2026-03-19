import { motion } from "framer-motion";
import { Briefcase, UserPlus, BadgeCheck, RefreshCcw } from "lucide-react";

const stats = [
  { number: "20+", label: "Years in HR & Recruiting", icon: Briefcase },
  { number: "90%", label: "New Clients via Referral", icon: UserPlus },
  { number: "98%", label: "Candidate Satisfaction", icon: BadgeCheck },
  { number: "85%", label: "Client Repeat Rate", icon: RefreshCcw },
];

const MissionSection = () => {
  return (
    <section id="mission" className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: "hsl(var(--primary))" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5" style={{ background: "hsl(var(--coral))" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow text-baby-blue mb-3">Our Mission</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-secondary-foreground leading-tight mb-6">
              Successful High Earners. .{" "}
              <span className="italic text-primary">Intentional Leaders</span>
            </h2>
            <p className="text-base leading-relaxed text-baby-blue/70 mb-6">
             SHE Executives is more than HR consulting. we're a movement. Partnering with Fortune 500 firms, owners, and small businesses across all US states and Canada, we champion DEI, negotiate wage equity, and place women leaders who transform organizations from the inside out.	
            </p>
            <p className="text-base leading-relaxed text-baby-blue/70">
              Over a decade of redefining HR from executive placement to full-service consulting, we are your complete HR extension.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-default"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                
                <span className="font-display text-3xl md:text-4xl font-bold text-primary block mb-1">
                  {stat.number}
                </span>

                <span className="text-xs text-baby-blue/60 leading-tight block">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
