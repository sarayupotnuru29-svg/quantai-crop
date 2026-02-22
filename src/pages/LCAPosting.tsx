import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";
import lcaHero from "@/assets/lca-hero.jpg";

const visaTypes = ["H-1B", "L-1A", "L-1B", "O-1", "TN", "E-2", "H-4 EAD", "OPT", "CPT", "Other"];

const LCAPosting = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    location: "",
    education: "",
    visaType: "",
    technologies: "",
    experience: "",
  });
  const [resume, setResume] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully! We will contact you shortly.");
    setFormData({
      firstName: "", lastName: "", email: "", mobile: "",
      location: "", education: "", visaType: "", technologies: "", experience: "",
    });
    setResume(null);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all";

  return (
    <div>
      <PageHero
        title="LCA Posting"
        subtitle="Submit your application and join our talent network."
        image={lcaHero}
      />

      <section className="py-24">
        <div className="section-container max-w-3xl">
          <AnimatedSection>
            <motion.form
              onSubmit={handleSubmit}
              className="glass-card p-8 lg:p-12 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                  <input name="firstName" value={formData.firstName} onChange={handleChange} required className={inputClass} placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                  <input name="lastName" value={formData.lastName} onChange={handleChange} required className={inputClass} placeholder="Doe" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email ID *</label>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Mobile Number *</label>
                  <input name="mobile" value={formData.mobile} onChange={handleChange} required className={inputClass} placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Location *</label>
                <input name="location" value={formData.location} onChange={handleChange} required className={inputClass} placeholder="City, State" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Highest Education Qualification *</label>
                <input name="education" value={formData.education} onChange={handleChange} required className={inputClass} placeholder="e.g., Master's in Computer Science" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Visa Type *</label>
                <select name="visaType" value={formData.visaType} onChange={handleChange} required className={inputClass}>
                  <option value="">Select Visa Type</option>
                  {visaTypes.map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Upload Resume (PDF/DOC) *</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResume(e.target.files?.[0] || null)}
                  required
                  className={inputClass + " file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20"}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Technologies *</label>
                <textarea
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleChange}
                  required
                  rows={3}
                  className={inputClass + " resize-none"}
                  placeholder="e.g., React, Node.js, AWS, Python, TensorFlow..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Years of Experience *</label>
                <input name="experience" value={formData.experience} onChange={handleChange} required className={inputClass} placeholder="e.g., 5" />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all animate-pulse-glow"
              >
                Submit Application
              </button>
            </motion.form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default LCAPosting;
