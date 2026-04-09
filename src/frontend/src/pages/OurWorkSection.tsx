import type { PortfolioItem } from "@/types";
import { motion } from "motion/react";
import { useState } from "react";

const portfolio: PortfolioItem[] = [
  {
    id: "1",
    title: "Luxury Brand Red Carpet Campaign",
    category: "Film & Television",
    imageUrl: "/assets/red-carpet-1.jpg",
    description:
      "Full red carpet brand integration for a major Hollywood premiere, reaching 4.2M viewers globally.",
    year: "2024",
  },
  {
    id: "2",
    title: "Hollywood Premiere Experience",
    category: "Live Events",
    imageUrl: "/assets/red-carpet-2.jpg",
    description:
      "End-to-end production of a branded premiere event with influencer activation and social amplification.",
    year: "2024",
  },
  {
    id: "3",
    title: "Luxury Influencer Lounge Series",
    category: "Influencer Experiences",
    imageUrl: "/assets/influencer-lounge-1.jpg",
    description:
      "Step-and-repeat branded lounges across 5 major festivals, generating 28M organic impressions.",
    year: "2024",
  },
  {
    id: "4",
    title: "Fashion & Lifestyle Integration",
    category: "Original IP",
    imageUrl: "/assets/influencer-lounge-4.jpg",
    description:
      "Co-created original lifestyle content series featuring luxury fashion brand integrations.",
    year: "2023",
  },
  {
    id: "5",
    title: "Premium Product Launch Activation",
    category: "Live Events",
    imageUrl: "/assets/products-2.jpg",
    description:
      "Cinematic product launch experience with celebrity endorsements and media coverage.",
    year: "2023",
  },
  {
    id: "6",
    title: "Creator Content Studio",
    category: "Influencer Experiences",
    imageUrl: "/assets/influencer-lounge-5.jpg",
    description:
      "Full-day branded content studio for top-tier creators, producing 200+ pieces of authentic content.",
    year: "2023",
  },
];

const categories = [
  "All",
  "Film & Television",
  "Live Events",
  "Influencer Experiences",
  "Original IP",
];

export function OurWorkSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPortfolio =
    activeCategory === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === activeCategory);
  return (
    <section
      id="our-work"
      className="py-24 relative"
      style={{ backgroundColor: "#0d1b24" }}
      data-ocid="our-work"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4 font-medium"
            style={{ color: "#e6d08e" }}
          >
            Our Work
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: "#e6d08e" }}
          >
            Where Brands Became
            <br />
            <span className="italic font-normal" style={{ color: "#acbfc3" }}>
              Cultural Moments
            </span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mb-8" />
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#acbfc3" }}
          >
            A selection of productions and activations that redefined what brand
            integration looks like.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
          data-ocid="work-filters"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider border transition-smooth cursor-pointer"
              style={{
                borderColor:
                  cat === activeCategory ? "#e6d08e" : "rgba(230,208,142,0.3)",
                color: cat === activeCategory ? "#e6d08e" : "#acbfc3",
                backgroundColor:
                  cat === activeCategory
                    ? "rgba(230,208,142,0.1)"
                    : "transparent",
              }}
              data-ocid={`filter-${cat
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "")}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredPortfolio.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-gold-subtle card-hover"
              style={{ backgroundColor: "rgba(5,12,20,0.8)" }}
              data-ocid={`portfolio-item-${item.id}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,12,20,0.7) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wider"
                    style={{
                      backgroundColor: "rgba(230,208,142,0.15)",
                      color: "#e6d08e",
                      border: "1px solid rgba(230,208,142,0.3)",
                    }}
                  >
                    {item.category}
                  </span>
                </div>
                {item.year && (
                  <div className="absolute top-4 right-4">
                    <span
                      className="text-xs font-medium"
                      style={{ color: "#acbfc3" }}
                    >
                      {item.year}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3
                  className="font-display text-xl font-bold mb-3 leading-tight"
                  style={{ color: "#e6d08e" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#acbfc3" }}
                >
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Influencer lounge gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden border border-gold-subtle"
          data-ocid="lounge-gallery"
        >
          <div
            className="p-8 text-center"
            style={{ backgroundColor: "rgba(230,208,142,0.04)" }}
          >
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3 font-medium"
              style={{ color: "#e6d08e" }}
            >
              Featured Activation
            </p>
            <h3
              className="font-display text-3xl font-bold"
              style={{ color: "#e6d08e" }}
            >
              Influencer Lounge Experiences
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
            {[
              "/assets/influencer-lounge-2.jpg",
              "/assets/influencer-lounge-3.jpg",
              "/assets/influencer-lounge-4.jpg",
              "/assets/influencer-lounge-5.jpg",
              "/assets/influencer-lounge-6.jpg",
              "/assets/influencer-lounge-1.jpg",
            ].map((img, i) => (
              <div
                key={img}
                className="aspect-square overflow-hidden relative group"
              >
                <img
                  src={img}
                  alt={`Influencer lounge ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "rgba(230,208,142,0.1)" }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
