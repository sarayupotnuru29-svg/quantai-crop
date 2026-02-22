import { motion } from "framer-motion";

const companies = [
  "Microsoft", "Google", "Amazon", "Intel", "Oracle", "Cisco",
  "IBM", "Accenture", "Deloitte", "Infosys", "Cognizant", "Wipro",
  "FedEx", "MetLife", "Wells Fargo", "JPMorgan", "Goldman Sachs", "SAP",
];

const CompanyMarquee = () => (
  <section className="py-12 overflow-hidden border-y border-border/20">
    <div className="section-container mb-6">
      <h3 className="font-display text-center text-lg text-muted-foreground">
        Trusted by Leading <span className="text-primary font-semibold">Enterprises</span>
      </h3>
    </div>
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...companies, ...companies].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="glass-card px-8 py-4 flex items-center justify-center min-w-[160px] text-muted-foreground font-display font-semibold text-lg tracking-wide hover:text-primary transition-colors"
          >
            {name}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default CompanyMarquee;
