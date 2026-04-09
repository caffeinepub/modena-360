import { motion } from "motion/react";

export function HomeSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        data-ocid="home-hero"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/red-carpet-1.jpg"
            alt="Red carpet Hollywood event"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 hero-overlay" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(5,12,20,0.3) 0%, rgba(5,12,20,0.0) 40%, rgba(5,12,20,0.7) 100%)",
            }}
          />
        </div>

        {/* Texture overlay */}
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url(/assets/texture-gold-1.jpg)",
            backgroundSize: "cover",
            mixBlendMode: "overlay",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs tracking-[0.3em] uppercase mb-6 font-medium"
            style={{ color: "#e6d08e" }}
          >
            Entertainment · Culture · Storytelling
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
            style={{ color: "#e6d08e" }}
          >
            Stop Advertising.
            <br />
            <span className="italic font-normal" style={{ color: "#f5ead4" }}>
              Start Belonging.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
            style={{ color: "#acbfc3" }}
          >
            Modena 360 Productions integrates brands directly into
            entertainment, culture, and storytelling—so your audience doesn't
            skip you… they follow you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="btn-gold px-8 py-4 text-sm rounded uppercase tracking-widest font-semibold"
              data-ocid="hero-cta-primary"
            >
              Get Started
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="btn-outline-gold px-8 py-4 text-sm rounded uppercase tracking-widest"
              data-ocid="hero-cta-secondary"
            >
              Book a Free Consultation
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "#acbfc3" }}
          >
            Scroll
          </span>
          <div
            className="w-px h-12 animate-pulse"
            style={{
              background: "linear-gradient(to bottom, #e6d08e, transparent)",
            }}
          />
        </motion.div>
      </section>

      {/* INTRO SECTION */}
      <section
        id="home-intro"
        className="py-24"
        style={{ backgroundColor: "#0a1520" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p
                className="text-xs tracking-[0.3em] uppercase mb-4 font-medium"
                style={{ color: "#e6d08e" }}
              >
                What We Are
              </p>
              <h2
                className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-8"
                style={{ color: "#e6d08e" }}
              >
                We're not an agency.
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "#acbfc3" }}
                >
                  We're connective tissue.
                </span>
              </h2>
              <div className="space-y-4 mb-10">
                {[
                  { id: "prod", text: "We're not just a production company." },
                  { id: "label", text: "We're not just a label." },
                  {
                    id: "tissue",
                    text: "We're the connective tissue between brands, creators, and culture.",
                  },
                ].map((item) => (
                  <p
                    key={item.id}
                    className="text-lg leading-relaxed"
                    style={{ color: "#acbfc3" }}
                  >
                    {item.text}
                  </p>
                ))}
              </div>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#acbfc3" }}
              >
                Modena 360 Productions partners with brands to embed products,
                stories, and experiences directly into entertainment ecosystems.
              </p>
              <p
                className="text-lg font-display italic font-semibold"
                style={{ color: "#e6d08e" }}
              >
                Your brand doesn't interrupt the story… it{" "}
                <span className="underline underline-offset-4">is</span> the
                story.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 gap-3"
            >
              {[
                { label: "Film & Television", icon: "🎬" },
                { label: "Music & Artist Development", icon: "🎵" },
                { label: "Festivals & Live Events", icon: "🎪" },
                { label: "Influencer-Led Experiences", icon: "✨" },
                { label: "Original IP & Franchise Development", icon: "🏆" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-dark rounded-lg px-6 py-4 flex items-center gap-4 card-hover"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <span className="font-medium" style={{ color: "#acbfc3" }}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM / SOLUTION */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: "#050c14" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(/assets/texture-bokeh.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl border border-gold-subtle p-8 relative overflow-hidden"
              style={{ backgroundColor: "rgba(151,85,75,0.08)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #97554b, transparent)",
                }}
              />
              <p
                className="text-xs tracking-[0.3em] uppercase mb-4 font-medium"
                style={{ color: "#97554b" }}
              >
                The Problem
              </p>
              <h3
                className="font-display text-3xl font-bold mb-6"
                style={{ color: "#e6d08e" }}
              >
                Nobody likes ads anymore.
              </h3>
              <p className="mb-6 leading-relaxed" style={{ color: "#acbfc3" }}>
                Not even the people making them.
              </p>
              <p className="mb-4 font-medium" style={{ color: "#acbfc3" }}>
                Today's audience:
              </p>
              <ul className="space-y-3">
                {[
                  "Skips ads",
                  "Blocks ads",
                  "Laughs at ads",
                  "Or worse… ignores them completely",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                    style={{ color: "#acbfc3" }}
                  >
                    <span style={{ color: "#97554b" }}>✗</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <p
                className="mt-6 font-display italic text-lg"
                style={{ color: "#97554b" }}
              >
                Forced marketing doesn't just fail—it backfires.
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-2xl border border-gold-subtle p-8 relative overflow-hidden"
              style={{ backgroundColor: "rgba(230,208,142,0.05)" }}
            >
              <div className="divider-gold absolute top-0 left-0 right-0" />
              <p
                className="text-xs tracking-[0.3em] uppercase mb-4 font-medium"
                style={{ color: "#e6d08e" }}
              >
                The Solution
              </p>
              <h3
                className="font-display text-3xl font-bold mb-6"
                style={{ color: "#e6d08e" }}
              >
                Native brand integration.
              </h3>
              <p className="mb-6 leading-relaxed" style={{ color: "#acbfc3" }}>
                We build brand experiences that:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Feels real",
                  "Adds value",
                  "Enhances the experience",
                  "Builds loyalty, not annoyance",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                    style={{ color: "#acbfc3" }}
                  >
                    <span style={{ color: "#e6d08e" }}>✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <p
                className="font-display italic text-lg leading-relaxed"
                style={{ color: "#e6d08e" }}
              >
                "Your brand becomes part of the audience's identity—not just
                their awareness."
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <p
              className="text-xl sm:text-2xl font-display italic mb-8"
              style={{ color: "#acbfc3" }}
            >
              Ready to stop chasing attention and start earning it?
            </p>
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="btn-gold px-10 py-4 text-sm rounded uppercase tracking-widest font-semibold"
              data-ocid="home-cta-bottom"
            >
              Let's Talk
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
