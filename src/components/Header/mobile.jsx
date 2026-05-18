import ngologo from "../../assets/ngo-logo.png";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Events",    href: "/events" },
  { label: "Contact",   href: "/contact" },
];


const Mobile = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
     useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 370) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={scrolled ? "header header-mobile headerScrolled" : "header header-mobile"}>
      <div className="logo">
        <img src={ngologo} alt="NGO Logo" className="logo-img" />
      </div>

      <nav className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
        <button className="donate-btn donate-btn-mobile">Donate Now</button>
      </nav>

      <button
        className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Mobile;