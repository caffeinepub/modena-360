import type { NavItem } from "@/types";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Who We Are", href: "#who-we-are" },
  { label: "How We Activate", href: "#how-we-activate" },
  { label: "Our Work", href: "#our-work" },
  { label: "Contact", href: "#contact" },
];

function GoldNavLink({
  href,
  children,
  onClick,
  "data-ocid": dataOcid,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  "data-ocid"?: string;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      className={`transition-smooth ${className}`}
      style={{ color: hovered ? "#e6d08e" : "#acbfc3" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-ocid={dataOcid}
    >
      {children}
    </a>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        data-ocid="nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-navy border-b border-gold-subtle shadow-luxury"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <GoldNavLink
              href="#home"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-3 group flex-shrink-0"
              data-ocid="nav-logo"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-subtle shadow-gold flex-shrink-0">
                <img
                  src="/assets/logo-main.jpg"
                  alt="Modena 360 Productions"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-gradient-gold font-display font-bold text-lg leading-tight tracking-wide">
                  MODENA 360
                </span>
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "#acbfc3" }}
                >
                  Productions
                </span>
              </div>
            </GoldNavLink>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <GoldNavLink
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium tracking-widest uppercase"
                  data-ocid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </GoldNavLink>
              ))}
              <button
                type="button"
                onClick={() => handleNavClick("#contact")}
                className="btn-gold px-5 py-2.5 text-sm rounded uppercase tracking-widest"
                data-ocid="nav-cta"
              >
                Get in Touch
              </button>
            </nav>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md transition-smooth"
              style={{ color: "#e6d08e" }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              data-ocid="nav-hamburger"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 glass-navy" />
          <nav
            className="absolute top-20 left-0 right-0 px-6 py-8 flex flex-col gap-6"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <GoldNavLink
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-lg font-medium tracking-widest uppercase py-2 border-b border-gold-subtle"
                data-ocid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </GoldNavLink>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="btn-gold px-6 py-3 text-sm rounded uppercase tracking-widest text-center mt-2"
              data-ocid="mobile-nav-cta"
            >
              Get in Touch
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
