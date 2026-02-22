import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import BlogCard from "@/components/BlogCard";

import heroBg from "@/assets/hero-bg.jpg";
import whoWeAre from "@/assets/who-we-are.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceDevops from "@/assets/service-devops.jpg";
import blogAi from "@/assets/blog-ai-future.jpg";
import blogCloud from "@/assets/blog-cloud.jpg";
import blogTalent from "@/assets/blog-talent.jpg";

const services = [
  { title: "AI & Data Solutions", desc: "Machine learning deployment, predictive analytics, and AI governance frameworks.", image: serviceAi },
  { title: "Cloud Architecture", desc: "Scalable cloud migration and architecture across AWS, Azure, and GCP.", image: serviceCloud },
  { title: "Cybersecurity & Compliance", desc: "Risk assessments, security architecture, and compliance readiness.", image: serviceSecurity },
  { title: "DevOps & CI/CD", desc: "Automated pipelines, infrastructure as code, and continuous delivery.", image: serviceDevops },
];

const whyChoose = [
  { title: "Strategic Execution", desc: "Advisory insight with hands-on implementation.", image: serviceAi },
  { title: "AI-Powered Talent", desc: "Faster hiring. Better alignment. Higher retention.", image: blogTalent },
  { title: "Scalable Models", desc: "Flexible delivery frameworks for enterprise needs.", image: serviceCloud },
  { title: "Enterprise Governance", desc: "Structured processes with measurable KPIs.", image: serviceSecurity },
];

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="AI Background" className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
          <div className="ai-grid-bg absolute inset-0" />
        </div>

        <div className="relative z-10 section-container text-center pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
          >
            Engineering the Future of{" "}
            <span className="glow-text">Enterprise Technology</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            AI-driven IT Consulting, Software Solutions & Talent Intelligence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-all border border-border/30"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/lca-posting"
              className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all animate-pulse-glow"
            >
              LCA Posting
            </Link>
          </motion.div>
        </div>
      </section>

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

      {/* Services */}
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

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="glass-card group overflow-hidden">
                  <div className="overflow-hidden aspect-video">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{service.desc}</p>
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
