import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  image: string;
  delay?: number;
}

const BlogCard = ({ title, image, delay = 0 }: BlogCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-card group overflow-hidden"
  >
    <div className="overflow-hidden aspect-video">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-5">
      <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <Link
        to="/contact"
        className="text-sm text-primary font-medium hover:underline"
      >
        Read More →
      </Link>
    </div>
  </motion.div>
);

export default BlogCard;
