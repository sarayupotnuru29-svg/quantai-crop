// import { Link } from "react-router-dom";
// import { Linkedin, Facebook, Instagram, Heart } from "lucide-react";
// // Importing the logo from your assets folder
// import logo from "../assets/quantai-logo.png";

// const Footer = () => {
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <footer className="bg-card/40 border-t border-border/30 mt-20">
//       <div className="section-container py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
//           {/* Company Column */}
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               {/* Logo Implementation */}
//               <img 
//                 src={logo} 
//                 alt="QuantAI Corp Logo" 
//                 className="h-10 w-auto object-contain" 
//               />
//               <h3 className="font-display font-bold text-lg text-foreground">
//                 Quant<span className="text-primary">AI</span> Corp
//               </h3>
//             </div>
//             <p className="text-muted-foreground text-sm leading-relaxed">
//               AI-driven IT Consulting, Software Solutions & Talent Intelligence for enterprise-grade digital transformation.
//             </p>
//           </div>

//           {/* Services Column */}
//           <div>
//             <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
//             <ul className="space-y-2">
//               {[
//                 { name: "Enterprise IT Consulting", path: "/it-consulting" },
//                 { name: "AI & Data Solutions", path: "/it-consulting" },
//                 { name: "Software Engineering", path: "/software-engineering" },
//                 { name: "Cybersecurity", path: "/it-consulting" },
//               ].map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     to={item.path}
//                     onClick={scrollToTop}
//                     className="text-muted-foreground text-sm hover:text-primary transition-colors"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Quick Links Column */}
//           <div>
//             <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               {[
//                 { name: "About Us", path: "/about" },
//                 { name: "Contact", path: "/contact" },
//                 { name: "Blog", path: "/contact" },
//               ].map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     to={item.path}
//                     onClick={scrollToTop}
//                     className="text-muted-foreground text-sm hover:text-primary transition-colors"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Connect Column */}
//           <div>
//             <h4 className="font-display font-semibold text-foreground mb-4">Connect</h4>
//             <div className="flex gap-3">
//               {[
//                 { icon: Linkedin, url: "https://www.linkedin.com/company/quantaicorp-llc/about/" },
//                 { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61587669915928" },
//                 { icon: Instagram, url: "https://www.instagram.com/quantaicorp/" },
//               ].map(({ icon: Icon, url }) => (
//                 <a
//                   key={url}
//                   href={url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2.5 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
//                 >
//                   <Icon size={18} />
//                 </a>
//               ))}
//             </div>
//             <div className="mt-4 text-sm text-muted-foreground space-y-1">
//               <p>📍 301 McCullough Drive, Suite 400</p>
//               <p className="pl-5">Charlotte, NC 28262</p>
//               <p className="mt-2">📞 +1 980-272-8321</p>
//               <p>📧 hr@quantaicorp.com</p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-12 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground space-y-4">
//           <p>© {new Date().getFullYear()} QuantAI Corp LLC. All rights reserved.</p>
          
//           {/* StaffArc Attribution */}
//           <div className="flex justify-center items-center gap-1">
//             Made with <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> by
//             <a
//               href="https://staffarc.in"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-1 text-orange-600 font-medium hover:underline"
//             >
//               <img
//                 src="https://www.staffarc.in/images/Staffarc-logo.png"
//                 alt="StaffArc logo"
//                 className="h-5 w-5 object-contain"
//               />
//               StaffArc
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { Link } from "react-router-dom";
import { Linkedin, Facebook, Instagram, Heart } from "lucide-react";
// Importing the logo from your assets folder
import logo from "../assets/quantai-logo.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-card/40 border-t border-border/30 mt-20">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Logo Implementation */}
              <img 
                src={logo} 
                alt="QuantAI Corp Logo" 
                className="h-10 w-auto object-contain" 
              />
              <h3 className="font-display font-bold text-lg text-foreground">
                Quant<span className="text-primary">AI</span> Corp
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI-driven IT Consulting, Software Solutions & Talent Intelligence for enterprise-grade digital transformation.
            </p>
          </div>

          {/* Services Column */}
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

          {/* Quick Links Column */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
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

          {/* Connect Column */}
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
            {/* Updated Address Section */}
            <div className="mt-4 text-sm text-muted-foreground space-y-1">
              <div className="flex gap-2">
                <span>📍</span>
                <address className="not-italic">
                  QuantAI Corp LLC<br />
                  10926 David Taylor Drive<br />
                  Suite 120 PMB1334<br />
                  Charlotte, NC 28262
                </address>
              </div>
              <p className="mt-2 flex items-center gap-2">
                <span>📞</span> +1 980-272-8321
              </p>
              <p className="flex items-center gap-2">
                <span>📧</span> hr@quantaicorp.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground space-y-4">
          <p>© {new Date().getFullYear()} QuantAI Corp LLC. All rights reserved.</p>
          
          {/* StaffArc Attribution */}
          <div className="flex justify-center items-center gap-1">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 font-medium hover:underline"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;