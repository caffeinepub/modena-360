import { motion } from "motion/react";

const pillars = [
  {
    title: "Entertainment-First Thinking",
    description:
      "Every brand integration begins with asking: does this make the content better? If not, we don't do it.",
    icon: "🎭",
  },
  {
    title: "Cultural Fluency",
    description:
      "We operate at the intersection of film, music, and lifestyle — so your brand speaks the same language as your audience.",
    icon: "🌐",
  },
  {
    title: "360° Execution",
    description:
      "From concept to distribution, we manage the full lifecycle of every partnership and production.",
    icon: "🔄",
  },
  {
    title: "Story-Led Strategy",
    description:
      "We're storytellers first. Brands that tell stories don't just get attention — they earn loyalty.",
    icon: "📖",
  },
];

const stats = [
  { value: "150+", label: "Brand Partnerships" },
  { value: "8+", label: "Years Experience" },
  { value: "50+", label: "Major Productions" },
  { value: "12M+", label: "Audience Reached" },
];

export function WhoWeAreSection() {
  return (
    <section
      id="who-we-are"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#0a1520" }}
      data-ocid="who-we-are"
    >
      {/* Decorative texture */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-5"
        style={{
          backgroundImage: "url(/assets/texture-gold-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "left center",
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
            Who We Are
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: "#e6d08e" }}
          >
            A New Kind of
            <br />
            <span className="italic font-normal" style={{ color: "#acbfc3" }}>
              Entertainment Company
            </span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mb-8" />
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#acbfc3" }}
          >
            Modena 360 Productions was built at the intersection of creativity
            and strategy — where premium content meets meaningful brand
            integration.
          </p>
        </motion.div>

        {/* Two-column: image + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-[4/3]">
              <img
                src="/assets/red-carpet-2.jpg"
                alt="Hollywood red carpet event"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(5,12,20,0.4) 0%, transparent 60%)",
                }}
              />
            </div>
            {/* Accent border */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg opacity-30"
              style={{
                background: "linear-gradient(135deg, #e6d08e, #97554b)",
              }}
            />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full border-2 border-gold-subtle opacity-40" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed" style={{ color: "#acbfc3" }}>
              We were founded on a simple truth: the most powerful advertising
              isn't advertising at all. It's authentic integration into the
              content people choose to consume.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#acbfc3" }}>
              Our team brings together veteran producers, brand strategists,
              talent managers, and cultural architects — all united by a passion
              for creating experiences that move people.
            </p>
            <p
              className="text-lg leading-relaxed font-display italic"
              style={{ color: "#e6d08e" }}
            >
              We don't sell impressions. We build relationships between brands
              and the audiences who will champion them.
            </p>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-dark rounded-xl p-6 card-hover"
              data-ocid={`pillar-${i}`}
            >
              <div className="text-3xl mb-4">{pillar.icon}</div>
              <h3
                className="font-display font-bold text-lg mb-3"
                style={{ color: "#e6d08e" }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#acbfc3" }}
              >
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 rounded-2xl border border-gold-subtle p-10"
          style={{ backgroundColor: "rgba(230,208,142,0.03)" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
              data-ocid={`stat-${i}`}
            >
              <div
                className="font-display text-4xl font-bold mb-2"
                style={{ color: "#e6d08e" }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm tracking-wide uppercase"
                style={{ color: "#acbfc3" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative brand element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 flex justify-center"
        >
          <div className="relative w-48 h-48 rounded-full overflow-hidden border border-gold-subtle shadow-elevated opacity-80">
            <img
              src="/assets/logo-m-3d.jpg"
              alt="Modena 360 brand mark"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at center, transparent 60%, rgba(5,12,20,0.6) 100%)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
