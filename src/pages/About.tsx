import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import aboutHero from "@/assets/about-hero.jpg";
import whoWeAre from "@/assets/who-we-are.jpg";
import valueIntegrity from "@/assets/value-integrity.jpg";
import valueExcellence from "@/assets/value-excellence.jpg";
import valuePartnership from "@/assets/value-partnership.jpg";
import valueInnovation from "@/assets/value-innovation.jpg";

const values = [
  { title: "Integrity & Transparency", desc: "We build trust through honest communication and ethical practices.", image: valueIntegrity },
  { title: "Engineering Excellence", desc: "We deliver solutions with the highest technical standards.", image: valueExcellence },
  { title: "Client-Centric Partnership", desc: "Your success is our mission — we grow with our clients.", image: valuePartnership },
  { title: "Continuous Innovation", desc: "We stay ahead of the curve with cutting-edge technology.", image: valueInnovation },
];

const About = () => (
  <div>
    <PageHero
      title="About QuantAI Corp"
      subtitle="Redefining how enterprises build and scale technology."
      image={aboutHero}
    />

    {/* Who We Are */}
    <section className="py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <img src={whoWeAre} alt="Our team" className="rounded-xl w-full h-80 object-cover" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Who We <span className="glow-text">Are</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              QuantAI Corp was founded with a bold vision to redefine how enterprises build and scale technology. We recognized that companies don't just need talent — they need alignment between business strategy and technical execution.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we operate as a strategic technology partner to organizations navigating digital disruption, cloud transformation, and AI adoption.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-24 gradient-section">
      <div className="section-container grid md:grid-cols-2 gap-8">
        <AnimatedSection>
          <div className="glass-card p-8 h-full">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our <span className="glow-text">Mission</span></h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower enterprises with intelligent technology solutions and high-impact talent that accelerate innovation and drive measurable business outcomes.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <div className="glass-card p-8 h-full">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our <span className="glow-text">Vision</span></h3>
            <p className="text-muted-foreground leading-relaxed">
              To become a globally recognized enterprise technology powerhouse shaping the future of AI, cloud computing, and digital infrastructure.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Core Values */}
    <section className="py-24 ai-grid-bg">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Core <span className="glow-text">Values</span>
          </h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <AnimatedSection key={val.title} delay={i * 0.1}>
              <div className="glass-card overflow-hidden group h-full">
                <div className="overflow-hidden h-40">
                  <img src={val.image} alt={val.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{val.title}</h3>
                  <p className="text-muted-foreground text-sm">{val.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
