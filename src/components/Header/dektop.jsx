import { useState, useEffect } from "react";
import ngologo from "../../assets/ngo-logo.png";


const navLinks = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Events",    href: "/events" },
  { label: "Contact",   href: "/contact" },
];

const Desktop = () => {
  const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) {
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
  return (
    <header className={scrolled ? "header header-desktop headerScrolled" : "header header-desktop"}>
      <div className="logo">
        <img src={ngologo} alt="NGO Logo" className="logo-img" />
      </div>

      <nav className="nav">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      
      <button className="donate-btn">Donate Now</button>
    </header>
  );
};

export default Desktop;