import type { NavItem } from "@/types";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useState } from "react";

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Who We Are", href: "#who-we-are" },
  { label: "How We Activate", href: "#how-we-activate" },
  { label: "Our Work", href: "#our-work" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Twitter, label: "X / Twitter", href: "https://twitter.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

function GoldLink({
  href,
  children,
  onClick,
  className = "",
  "data-ocid": dataOcid,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  "data-ocid"?: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onClick={
        onClick
          ? (e) => {
              e.preventDefault();
              onClick();
            }
          : undefined
      }
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

function SocialIcon({
  href,
  label,
  icon: Icon,
  "data-ocid": dataOcid,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
  "data-ocid"?: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full flex items-center justify-center transition-smooth"
      style={{
        color: hovered ? "#e6d08e" : "#acbfc3",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: hovered ? "#e6d08e" : "rgba(230,208,142,0.3)",
        boxShadow: hovered ? "0 0 12px rgba(230,208,142,0.3)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-ocid={dataOcid}
    >
      <Icon size={16} />
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="teal-bg border-t border-gold-subtle" data-ocid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-gold-subtle flex-shrink-0">
                <img
                  src="/assets/logo-main.jpg"
                  alt="Modena 360 Productions"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-gradient-gold font-display font-bold text-xl tracking-wide">
                  MODENA 360
                </div>
                <div
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "#acbfc3" }}
                >
                  Productions
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed italic font-display"
              style={{ color: "#acbfc3" }}
            >
              "Where Brands Become Culture"
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "#acbfc3" }}>
              We're the connective tissue between brands, creators, and culture
              — embedding stories directly into entertainment.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-xs tracking-widest uppercase mb-6 font-medium"
              style={{ color: "#e6d08e" }}
            >
              Navigate
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <GoldLink
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm"
                    data-ocid={`footer-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </GoldLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h3
              className="text-xs tracking-widest uppercase mb-6 font-medium"
              style={{ color: "#e6d08e" }}
            >
              Connect
            </h3>
            <div className="flex gap-4 mb-8">
              {socialLinks.map(({ icon, label, href }) => (
                <SocialIcon
                  key={label}
                  href={href}
                  label={label}
                  icon={icon}
                  data-ocid={`footer-social-${label.toLowerCase()}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="btn-gold px-6 py-3 text-xs rounded uppercase tracking-widest"
              data-ocid="footer-cta"
            >
              Start a Conversation
            </button>
          </div>
        </div>

        <div className="divider-gold mb-8" />

        {/* Alternate branding logos */}
        <div className="flex items-center justify-center gap-6 mb-8 opacity-60">
          <img
            src="/assets/logo-m-minimal-1.jpg"
            alt="Modena 360 alternate mark"
            className="h-10 w-auto object-contain"
          />
          <img
            src="/assets/logo-m-minimal-2.jpg"
            alt="Modena 360 alternate mark 2"
            className="h-10 w-auto object-contain"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs tracking-wide" style={{ color: "#acbfc3" }}>
            © {year} Modena 360 Productions. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#acbfc3" }}>
            Built with love using{" "}
            <GoldLink
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              className="text-xs"
            >
              caffeine.ai
            </GoldLink>
          </p>
        </div>
      </div>
    </footer>
  );
}
