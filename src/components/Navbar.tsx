// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import logo from "@/assets/quantai-logo.png";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "About", path: "/about" },
//   { name: "IT Consulting", path: "/it-consulting" },
//   { name: "Software Engineering", path: "/software-engineering" },
//   { name: "Contact", path: "/contact" },
// ];

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setMobileOpen(false);
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-background/80 backdrop-blur-xl border-b border-border/30 shadow-lg shadow-background/50"
//           : "bg-transparent"
//       }`}
//     >
//       <nav className="section-container flex items-center justify-between h-16 lg:h-20">
//         <Link to="/" className="flex items-center gap-2">
//           <img src={logo} alt="QuantAI Corp" className="h-10 lg:h-12 w-auto" />
//           <span className="font-display font-bold text-lg lg:text-xl text-foreground hidden sm:block">
//             Quant<span className="text-primary">AI</span> Corp
//           </span>
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden lg:flex items-center gap-1">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                 location.pathname === link.path
//                   ? "text-primary bg-primary/10"
//                   : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="lg:hidden p-2 text-foreground"
//           aria-label="Toggle menu"
//         >
//           {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/30"
//           >
//             <div className="section-container py-4 flex flex-col gap-1">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
//                     location.pathname === link.path
//                       ? "text-primary bg-primary/10"
//                       : "text-muted-foreground hover:text-foreground"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// };

// export default Navbar;










import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/quantai-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "IT Consulting", path: "/it-consulting" },
  { name: "Software Engineering", path: "/software-engineering" },
  { name: "LCA Posting", path: "/lca-posting" }, // Added this line
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/30 shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="QuantAI Corp" className="h-10 lg:h-12 w-auto" />
          <span className="font-display font-bold text-lg lg:text-xl text-foreground hidden sm:block">
            Quant<span className="text-primary">AI</span> Corp
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/30"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;