// import AnimatedSection from "@/components/AnimatedSection";
// import BlogCard from "@/components/BlogCard";
// import JobCard from "@/components/JobCard";
// import { Mail, Phone, MapPin, Clock } from "lucide-react";

// import blogAi from "@/assets/blog-ai-future.jpg";
// import blogCloud from "@/assets/blog-cloud.jpg";
// import blogTalent from "@/assets/blog-talent.jpg";
// import serviceAi from "@/assets/service-ai.jpg";
// import serviceCloud from "@/assets/service-cloud.jpg";
// import serviceSecurity from "@/assets/service-security.jpg";

// const blogs = [
//   { title: "Future of AI in Enterprise", image: blogAi },
//   { title: "Cloud Modernization Trends", image: blogCloud },
//   { title: "AI-Driven Talent Intelligence", image: blogTalent },
//   { title: "Cybersecurity in the AI Age", image: serviceSecurity },
//   { title: "DevOps Best Practices 2025", image: serviceCloud },
//   { title: "Enterprise AI Governance", image: serviceAi },
// ];

// const jobs = [
//   { title: "Senior Cloud Architect", location: "Charlotte, NC", experience: "8+ years" },
//   { title: "AI/ML Engineer", location: "Remote", experience: "5+ years" },
//   { title: "DevOps Engineer", location: "Charlotte, NC", experience: "4+ years" },
//   { title: "Full Stack Developer", location: "Remote", experience: "3+ years" },
//   { title: "Cybersecurity Analyst", location: "Charlotte, NC", experience: "5+ years" },
// ];

// const Contact = () => (
//   <div className="pt-24">
//     {/* Contact Info */}
//     <section className="py-24">
//       <div className="section-container">
//         <AnimatedSection className="text-center mb-16">
//           <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
//             Let's Build the Future <span className="glow-text">Together</span>
//           </h1>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Whether you're modernizing infrastructure, deploying AI, or scaling your workforce — we're ready to partner with you.
//           </p>
//         </AnimatedSection>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
//           {[
//             { icon: MapPin, label: "Address", value: "301 McCullough Drive, Suite 400\nCharlotte, NC 28262" },
//             { icon: Phone, label: "Phone", value: "+1 980-272-8321" },
//             { icon: Mail, label: "Email", value: "hr@quantaicorp.com" },
//             { icon: Clock, label: "Business Hours", value: "Mon–Fri: 9 AM – 6 PM EST\nSat–Sun: Holiday" },
//           ].map(({ icon: Icon, label, value }) => (
//             <AnimatedSection key={label}>
//               <div className="glass-card p-6 text-center h-full">
//                 <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
//                   <Icon size={18} className="text-primary" />
//                 </div>
//                 <h3 className="font-display font-semibold text-foreground mb-2">{label}</h3>
//                 <p className="text-muted-foreground text-sm whitespace-pre-line">{value}</p>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>
//       </div>
//     </section>

//     {/* Blog */}
//     <section className="py-24 gradient-section">
//       <div className="section-container">
//         <AnimatedSection className="text-center mb-16">
//           <h2 className="font-display text-3xl font-bold text-foreground mb-4">
//             Latest <span className="glow-text">Insights</span>
//           </h2>
//         </AnimatedSection>
//         <div className="grid md:grid-cols-3 gap-6">
//           {blogs.map((blog, i) => (
//             <BlogCard key={blog.title} title={blog.title} image={blog.image} delay={i * 0.08} />
//           ))}
//         </div>
//       </div>
//     </section>

//     {/* Jobs */}
//     <section className="py-24">
//       <div className="section-container">
//         <AnimatedSection className="text-center mb-16">
//           <h2 className="font-display text-3xl font-bold text-foreground mb-4">
//             Job <span className="glow-text">Openings</span>
//           </h2>
//           <p className="text-muted-foreground">Join our team of enterprise technology experts.</p>
//         </AnimatedSection>
//         <div className="space-y-4 max-w-3xl mx-auto">
//           {jobs.map((job) => (
//             <AnimatedSection key={job.title}>
//               <JobCard {...job} />
//             </AnimatedSection>
//           ))}
//         </div>
//       </div>
//     </section>
//   </div>
// );

// export default Contact;





import AnimatedSection from "@/components/AnimatedSection";
import BlogCard from "@/components/BlogCard";
import JobCard from "@/components/JobCard";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

import blogAi from "@/assets/blog-ai-future.jpg";
import blogCloud from "@/assets/blog-cloud.jpg";
import blogTalent from "@/assets/blog-talent.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceSecurity from "@/assets/service-security.jpg";

const blogs = [
  { title: "Future of AI in Enterprise", image: blogAi },
  { title: "Cloud Modernization Trends", image: blogCloud },
  { title: "AI-Driven Talent Intelligence", image: blogTalent },
  { title: "Cybersecurity in the AI Age", image: serviceSecurity },
  { title: "DevOps Best Practices 2025", image: serviceCloud },
  { title: "Enterprise AI Governance", image: serviceAi },
];

const jobs = [
  { title: "Senior Cloud Architect", location: "Charlotte, NC", experience: "8+ years" },
  { title: "AI/ML Engineer", location: "Remote", experience: "5+ years" },
  { title: "DevOps Engineer", location: "Charlotte, NC", experience: "4+ years" },
  { title: "Full Stack Developer", location: "Remote", experience: "3+ years" },
  { title: "Cybersecurity Analyst", location: "Charlotte, NC", experience: "5+ years" },
];

const Contact = () => (
  <div className="pt-24">
    {/* Contact Info */}
    <section className="py-24">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Build the Future <span className="glow-text">Together</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're modernizing infrastructure, deploying AI, or scaling your workforce — we're ready to partner with you.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { 
              icon: MapPin, 
              label: "Address", 
              value: "QuantAI Corp LLC\n10926 David Taylor Drive\nSuite 120 PMB1334\nCharlotte, NC 28262" 
            },
            { icon: Phone, label: "Phone", value: "+1 980-272-8321" },
            { icon: Mail, label: "Email", value: "hr@quantaicorp.com" },
            { icon: Clock, label: "Business Hours", value: "Mon–Fri: 9 AM – 6 PM EST\nSat–Sun: Holiday" },
          ].map(({ icon: Icon, label, value }) => (
            <AnimatedSection key={label}>
              <div className="glass-card p-6 text-center h-full flex flex-col items-center">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{label}</h3>
                <p className="text-muted-foreground text-sm whitespace-pre-line leading-relaxed">{value}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Blog */}
    <section className="py-24 gradient-section">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Latest <span className="glow-text">Insights</span>
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <BlogCard key={blog.title} title={blog.title} image={blog.image} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>

    {/* Jobs */}
    <section className="py-24">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Job <span className="glow-text">Openings</span>
          </h2>
          <p className="text-muted-foreground">Join our team of enterprise technology experts.</p>
        </AnimatedSection>
        <div className="space-y-4 max-w-3xl mx-auto">
          {jobs.map((job) => (
            <AnimatedSection key={job.title}>
              <JobCard {...job} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Contact;