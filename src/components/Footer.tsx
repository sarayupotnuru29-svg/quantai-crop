import { Link } from "react-router-dom";
import { Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-card/40 border-t border-border/30 mt-20">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h3 className="font-display font-bold text-lg text-foreground mb-4">
              Quant<span className="text-primary">AI</span> Corp
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI-driven IT Consulting, Software Solutions & Talent Intelligence for enterprise-grade digital transformation.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { name: "Enterprise IT Consulting", path: "/it-consulting" },
                { name: "AI & Data Solutions", path: "/it-consulting" },
                { name: "Software Engineering", path: "/software-engineering" },
                { name: "Cybersecurity", path: "/it-consulting" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={scrollToTop}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "LCA Posting", path: "/lca-posting" },
                { name: "Blog", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={scrollToTop}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, url: "https://www.linkedin.com/company/quantaicorp-llc/about/" },
                { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61587669915928" },
                { icon: Instagram, url: "https://www.instagram.com/quantaicorp/" },
              ].map(({ icon: Icon, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>📍 301 McCullough Drive, Suite 400</p>
              <p>Charlotte, NC 28262</p>
              <p className="mt-2">📞 +1 980-272-8321</p>
              <p>📧 hr@quantaicorp.com</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} QuantAI Corp LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
