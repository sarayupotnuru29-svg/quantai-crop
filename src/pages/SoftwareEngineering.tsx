import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import softwareHero from "@/assets/software-hero.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceDevops from "@/assets/service-devops.jpg";
import appModernization from "@/assets/app-modernization.jpg";
import serviceApi from "@/assets/service-api.jpg";
import infraOptimize from "@/assets/infra-optimize.jpg";

const sections = [
  { title: "Cloud Architecture", desc: "Scalable, secure cloud solutions across AWS, Azure, and GCP for enterprise workloads.", image: serviceCloud },
  { title: "DevOps & CI/CD", desc: "Automated deployment pipelines, infrastructure as code, and continuous delivery workflows.", image: serviceDevops },
  { title: "Application Modernization", desc: "Legacy system transformation to modern, cloud-native architectures.", image: appModernization },
  { title: "API & Microservices", desc: "Robust API design and microservices architecture for scalable applications.", image: serviceApi },
  { title: "Infrastructure Optimization", desc: "Performance tuning, cost optimization, and infrastructure reliability engineering.", image: infraOptimize },
];

const SoftwareEngineering = () => (
  <div>
    <PageHero
      title="Software Engineering"
      subtitle="Building enterprise-grade software with cutting-edge engineering practices."
      image={softwareHero}
    />

    <section className="py-24 ai-grid-bg">
      <div className="section-container space-y-24">
        {sections.map((sec, i) => (
          <AnimatedSection key={sec.title}>
            <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img src={sec.image} alt={sec.title} className="rounded-xl w-full h-72 object-cover" />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">{sec.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{sec.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </div>
);

export default SoftwareEngineering;
