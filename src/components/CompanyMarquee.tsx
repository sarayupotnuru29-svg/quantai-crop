import { motion } from "framer-motion";

const companies = [
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "Intel", logo: "https://logo.clearbit.com/intel.com" },
  { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "Cisco", logo: "https://logo.clearbit.com/cisco.com" },
  { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
  { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
  { name: "Deloitte", logo: "https://logo.clearbit.com/deloitte.com" },
  { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
  { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com" },
  { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
  { name: "FedEx", logo: "https://logo.clearbit.com/fedex.com" },
  { name: "MetLife", logo: "https://logo.clearbit.com/metlife.com" },
  { name: "Wells Fargo", logo: "https://logo.clearbit.com/wellsfargo.com" },
  { name: "JPMorgan", logo: "https://logo.clearbit.com/jpmorgan.com" },
  { name: "Goldman Sachs", logo: "https://logo.clearbit.com/goldmansachs.com" },
  { name: "SAP", logo: "https://logo.clearbit.com/sap.com" },
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
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...companies, ...companies].map((company, i) => (
          <div
            key={`${company.name}-${i}`}
            className="glass-card px-6 py-4 flex items-center gap-3 min-w-[200px] hover:border-primary/30 transition-colors"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-8 w-8 object-contain rounded"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <span className="text-muted-foreground font-display font-semibold text-base tracking-wide">
              {company.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default CompanyMarquee;
