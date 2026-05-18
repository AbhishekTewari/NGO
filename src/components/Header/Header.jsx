import "./Header.css";
import { useState, useEffect } from "react";
import Desktop from "./dektop";
import Mobile from "./mobile";


const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 860);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 860);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return isMobile ? <Mobile /> : <Desktop />;
};

export default Header;