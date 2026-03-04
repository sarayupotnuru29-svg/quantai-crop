import { motion } from "framer-motion";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import BlogCard from "@/components/BlogCard";
import CompanyMarquee from "@/components/CompanyMarquee";

import heroLogo from "@/assets/quantai-logo.png";
import whoWeAre from "@/assets/who-we-are.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceDevops from "@/assets/service-devops.jpg";
import blogAi from "@/assets/blog-ai-future.jpg";
import blogCloud from "@/assets/blog-cloud.jpg";
import blogTalent from "@/assets/blog-talent.jpg";
import chooseStrategy from "@/assets/choose-strategy.jpg";
import chooseTalent from "@/assets/choose-talent.jpg";
import chooseScale from "@/assets/choose-scale.jpg";
import chooseGovernance from "@/assets/choose-governance.jpg";

const services = [
  { title: "AI & Data Solutions", desc: "Machine learning deployment, predictive analytics, and AI governance frameworks.", image: serviceAi },
  { title: "Cloud Architecture", desc: "Scalable cloud migration and architecture across AWS, Azure, and GCP.", image: serviceCloud },
  { title: "Cybersecurity & Compliance", desc: "Risk assessments, security architecture, and compliance readiness.", image: serviceSecurity },
  { title: "DevOps & CI/CD", desc: "Automated pipelines, infrastructure as code, and continuous delivery.", image: serviceDevops },
];

const whyChoose = [
  { title: "Strategic Execution", desc: "Advisory insight with hands-on implementation.", image: chooseStrategy },
  { title: "AI-Powered Talent", desc: "Faster hiring. Better alignment. Higher retention.", image: chooseTalent },
  { title: "Scalable Models", desc: "Flexible delivery frameworks for enterprise needs.", image: chooseScale },
  { title: "Enterprise Governance", desc: "Structured processes with measurable KPIs.", image: chooseGovernance },
];

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="hero-overlay absolute inset-0" />
          <div className="ai-grid-bg absolute inset-0" />
        </div>

        <div className="relative z-10 section-container text-center pt-20 flex flex-col items-center">
          <motion.img
            src={heroLogo}
            alt="QuantAI Corp"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain mb-8"
          />
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
          >
            Engineering the Future of{" "}
            <span className="glow-text">Enterprise Technology</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            AI-driven IT Consulting, Software Solutions & Talent Intelligence.
          </motion.p>
        </div>
      </section>

      {/* Company Marquee */}
      <CompanyMarquee />

      {/* Who We Are */}
      <section className="py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="overflow-hidden rounded-xl">
                <img
                  src={whoWeAre}
                  alt="QuantAI Corp Team"
                  className="w-full h-80 lg:h-[28rem] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Who We <span className="glow-text">Are</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are a next-generation technology partner combining strategic advisory, advanced engineering, and AI-powered talent intelligence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unlike traditional staffing firms, we integrate enterprise technology consulting, Cloud & DevOps engineering, AI & data transformation, and scalable IT workforce solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our model is built for long-term partnerships, measurable impact, and sustainable growth.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services - single row with smaller images */}
      <section className="py-24 gradient-section">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our <span className="glow-text">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade solutions across IT consulting, software engineering, and talent intelligence.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="glass-card group overflow-hidden h-full">
                  <div className="overflow-hidden h-36">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-sm lg:text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-xs lg:text-sm line-clamp-2">{service.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 ai-grid-bg">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Leading Enterprises <span className="glow-text">Choose Us</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="glass-card overflow-hidden group h-full">
                  <div className="overflow-hidden h-40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-24">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Latest <span className="glow-text">Insights</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            <BlogCard title="Future of AI in Enterprise" image={blogAi} delay={0} />
            <BlogCard title="Cloud Modernization Trends" image={blogCloud} delay={0.1} />
            <BlogCard title="AI-Driven Talent Intelligence" image={blogTalent} delay={0.2} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
