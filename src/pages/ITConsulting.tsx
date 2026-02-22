import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import consultingHero from "@/assets/consulting-hero.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceTalent from "@/assets/service-talent.jpg";

const sections = [
  {
    title: "Enterprise IT Consulting",
    desc: "We design and implement scalable technology ecosystems that drive operational excellence.",
    bullets: ["Cloud Architecture & Migration (AWS, Azure, GCP)", "Application Modernization", "System Integration", "Infrastructure Optimization"],
    image: serviceCloud,
  },
  {
    title: "AI & Data Solutions",
    desc: "We enable enterprises to harness the power of AI and advanced analytics.",
    bullets: ["Machine Learning deployment", "Predictive analytics systems", "Data engineering pipelines", "AI governance frameworks"],
    image: serviceAi,
  },
  {
    title: "Cybersecurity & Compliance",
    desc: "Protecting enterprise systems is mission-critical.",
    bullets: ["Risk assessments", "Security architecture design", "Compliance readiness (SOC, HIPAA)", "Cloud security implementation"],
    image: serviceSecurity,
  },
  {
    title: "AI-Driven Talent Solutions",
    desc: "Our proprietary sourcing methodology combines data analytics and performance modeling to deliver elite technology professionals.",
    bullets: ["Contract staffing", "Contract-to-hire", "Direct placement", "Managed services"],
    image: serviceTalent,
  },
];

const ITConsulting = () => (
  <div>
    <PageHero
      title="IT Consulting"
      subtitle="Strategic technology consulting for enterprise-grade digital transformation."
      image={consultingHero}
    />

    <section className="py-24">
      <div className="section-container space-y-24">
        {sections.map((sec, i) => (
          <AnimatedSection key={sec.title}>
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img src={sec.image} alt={sec.title} className="rounded-xl w-full h-72 object-cover" />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {sec.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{sec.desc}</p>
                <ul className="space-y-2">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-primary mt-1">●</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </div>
);

export default ITConsulting;
