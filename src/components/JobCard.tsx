import { Link } from "react-router-dom";
import { MapPin, Briefcase } from "lucide-react";

interface JobCardProps {
  title: string;
  location: string;
  experience: string;
}

const JobCard = ({ title, location, experience }: JobCardProps) => (
  <div className="glass-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300">
    <div>
      <h3 className="font-display font-semibold text-foreground text-lg">{title}</h3>
      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
        <span className="flex items-center gap-1"><MapPin size={14} /> {location}</span>
        <span className="flex items-center gap-1"><Briefcase size={14} /> {experience}</span>
      </div>
    </div>
    <a
      href="mailto:hr@quantaicorp.com"
      className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all whitespace-nowrap text-center"
    >
      Apply Now
    </a>
  </div>
);

export default JobCard;
