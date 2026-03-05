import { motion } from "framer-motion";

const companies = [
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "LinkedIn", logo: "https://logo.clearbit.com/linkedin.com" },
  { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "Dell", logo: "https://logo.clearbit.com/dell.com" },
  { name: "Workday", logo: "https://logo.clearbit.com/workday.com" },
  { name: "Palo Alto Networks", logo: "https://logo.clearbit.com/paloaltonetworks.com" },
  { name: "EY", logo: "https://logo.clearbit.com/ey.com" },
  { name: "Snap Inc.", logo: "https://logo.clearbit.com/snap.com" },
  { name: "T-Mobile", logo: "https://logo.clearbit.com/t-mobile.com" },
  { name: "JPMorgan Chase", logo: "https://logo.clearbit.com/jpmorganchase.com" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { name: "Cisco", logo: "https://logo.clearbit.com/cisco.com" },
  { name: "Deloitte", logo: "https://logo.clearbit.com/deloitte.com" },
  { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
  { name: "SAP", logo: "https://logo.clearbit.com/sap.com" },
];

const CompanyMarquee = () => (
  <section className="py-16 overflow-hidden">
    <div className="section-container mb-10">
      <h3 className="font-display text-center text-lg text-muted-foreground">
        Trusted by Leading <span className="text-primary font-semibold">Enterprises</span>
      </h3>
    </div>

    {/* Row 1 - scroll left */}
    <div className="relative mb-4">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <motion.div
        className="flex gap-5 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {[...companies.slice(0, 8), ...companies.slice(0, 8)].map((company, i) => (
          <div
            key={`row1-${company.name}-${i}`}
            className="flex items-center justify-center min-w-[180px] h-16 bg-white rounded-lg px-6 shadow-sm"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-8 max-w-[140px] object-contain"
              onError={(e) => {
                const el = e.target as HTMLImageElement;
                el.style.display = 'none';
                el.parentElement!.innerHTML = `<span style="color:#333;font-weight:600;font-size:14px;">${company.name}</span>`;
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>

    {/* Row 2 - scroll right */}
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <motion.div
        className="flex gap-5 whitespace-nowrap"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {[...companies.slice(8), ...companies.slice(8)].map((company, i) => (
          <div
            key={`row2-${company.name}-${i}`}
            className="flex items-center justify-center min-w-[180px] h-16 bg-white rounded-lg px-6 shadow-sm"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-8 max-w-[140px] object-contain"
              onError={(e) => {
                const el = e.target as HTMLImageElement;
                el.style.display = 'none';
                el.parentElement!.innerHTML = `<span style="color:#333;font-weight:600;font-size:14px;">${company.name}</span>`;
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default CompanyMarquee;
