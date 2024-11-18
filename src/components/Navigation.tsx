import { Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ["home", "education", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "home" },
    { id: "education", label: "education" },
    { id: "projects", label: "projects" },
    { id: "contact", label: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the navigation bar plus some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold"
          >
            BenGi
          </button>

          <div className="flex gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-gray-600 hover:text-black transition-colors"
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-md bg-gray-100"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Moon className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;