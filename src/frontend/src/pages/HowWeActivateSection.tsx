import type { Service } from "@/types";
import { motion } from "motion/react";

const services: Service[] = [
  {
    id: "film-tv",
    title: "Film & Television",
    description:
      "Strategic product placement and storyline integration that makes your brand part of cinematic moments audiences love and remember.",
    icon: "🎬",
    imageUrl: "/assets/red-carpet-1.jpg",
  },
  {
    id: "music",
    title: "Music & Artist Development",
    description:
      "From music videos to album launches, we embed brands into the cultural moments that define generations.",
    icon: "🎵",
    imageUrl: "/assets/influencer-lounge-1.jpg",
  },
  {
    id: "festivals",
    title: "Festivals & Live Events",
    description:
      "Transform live events into branded experiences that attendees carry with them long after the music stops.",
    icon: "🎪",
    imageUrl: "/assets/influencer-lounge-2.jpg",
  },
  {
    id: "influencer",
    title: "Influencer-Led Experiences",
    description:
      "Curated influencer lounges, content creation studios, and branded activations that generate authentic social content at scale.",
    icon: "✨",
    imageUrl: "/assets/influencer-lounge-3.jpg",
  },
  {
    id: "original-ip",
    title: "Original IP & Franchise Development",
    description:
      "We create original intellectual property — series, formats, and franchises — built around your brand's story from the ground up.",
    icon: "🏆",
    imageUrl: "/assets/products-1.jpg",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Deep dive into your brand DNA, audience, and goals.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We map the perfect entertainment ecosystem for your integration.",
  },
  {
    step: "03",
    title: "Creation",
    description:
      "Our production team builds the content around your brand story.",
  },
  {
    step: "04",
    title: "Distribution",
    description:
      "We amplify across platforms, channels, and cultural touchpoints.",
  },
  {
    step: "05",
    title: "Measurement",
    description:
      "Full analytics on cultural impact, audience engagement, and ROI.",
  },
];

export function HowWeActivateSection() {
  return (
    <section
      id="how-we-activate"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#050c14" }}
      data-ocid="how-we-activate"
    >
      {/* Left texture accent */}
      <div
        className="absolute left-0 top-0 w-1/3 h-full opacity-8"
        style={{
          backgroundImage: "url(/assets/texture-gold-3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "right center",
          opacity: 0.06,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            How We Activate
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: "#e6d08e" }}
          >
            Your Brand in the
            <br />
            <span className="italic font-normal" style={{ color: "#acbfc3" }}>
              Heart of the Story
            </span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mb-8" />
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#acbfc3" }}
          >
            Five powerful channels. One seamless integration strategy. Built to
            make your brand unforgettable.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden card-hover"
              style={{ minHeight: "320px" }}
              data-ocid={`service-card-${service.id}`}
            >
              {/* Background image */}
              <img
                src={service.imageUrl}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,12,20,0.95) 0%, rgba(5,12,20,0.6) 50%, rgba(5,12,20,0.2) 100%)",
                }}
              />
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3
                  className="font-display text-xl font-bold mb-3"
                  style={{ color: "#e6d08e" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#acbfc3" }}
                >
                  {service.description}
                </p>
                <div
                  className="mt-4 h-px transition-all duration-500 group-hover:opacity-100 opacity-50"
                  style={{
                    background: "linear-gradient(90deg, #e6d08e, transparent)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product collage showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <p
            className="text-center text-xs tracking-[0.3em] uppercase mb-8 font-medium"
            style={{ color: "#e6d08e" }}
          >
            Integrated Product Categories
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              "/assets/products-1.jpg",
              "/assets/products-2.jpg",
              "/assets/products-3.jpg",
              "/assets/products-4.jpg",
              "/assets/products-5.jpg",
            ].map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="aspect-square rounded-xl overflow-hidden relative group card-hover"
              >
                <img
                  src={img}
                  alt={`Product category ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "rgba(230,208,142,0.15)",
                    border: "1px solid rgba(230,208,142,0.4)",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <div
          className="rounded-2xl border border-gold-subtle p-8 sm:p-12"
          style={{ backgroundColor: "rgba(230,208,142,0.03)" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase mb-4 font-medium text-center"
            style={{ color: "#e6d08e" }}
          >
            Our Process
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-center mb-12"
            style={{ color: "#e6d08e" }}
          >
            From Brief to Cultural Impact
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
                data-ocid={`process-step-${i}`}
              >
                <div
                  className="w-12 h-12 rounded-full border-2 border-gold-subtle flex items-center justify-center mx-auto mb-4 font-display font-bold text-sm"
                  style={{ color: "#e6d08e" }}
                >
                  {step.step}
                </div>
                <h4
                  className="font-display font-bold mb-2"
                  style={{ color: "#e6d08e" }}
                >
                  {step.title}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "#acbfc3" }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
