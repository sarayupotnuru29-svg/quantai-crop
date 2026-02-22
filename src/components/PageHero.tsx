import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

const PageHero = ({ title, subtitle, image }: PageHeroProps) => (
  <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="page-hero-overlay absolute inset-0" />
    </div>
    <div className="relative z-10 text-center section-container">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;
