import type { ContactFormData } from "@/types";
import { motion } from "motion/react";
import { useState } from "react";

const serviceOptions = [
  "Film & Television Integration",
  "Music & Artist Development",
  "Festivals & Live Events",
  "Influencer-Led Experiences",
  "Original IP Development",
  "Full 360° Partnership",
];

const initialForm: ContactFormData = {
  name: "",
  email: "",
  company: "",
  message: "",
  serviceType: "",
};

export function ContactSection() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#050c14" }}
      data-ocid="contact"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/texture-gold-3.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4 font-medium"
            style={{ color: "#e6d08e" }}
          >
            Contact
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: "#e6d08e" }}
          >
            Start a Conversation
          </h2>
          <div className="section-divider max-w-xs mx-auto mb-8" />
          <p
            className="text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: "#acbfc3" }}
          >
            Ready to stop chasing attention and start earning it? Tell us about
            your brand and let's build something unforgettable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3
                className="font-display text-2xl font-bold mb-6"
                style={{ color: "#e6d08e" }}
              >
                Let's Make Culture Together
              </h3>
              <p className="leading-relaxed mb-8" style={{ color: "#acbfc3" }}>
                Whether you're a global brand looking to deepen cultural
                connection or an emerging company ready to enter the
                entertainment space — we'd love to talk.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                { label: "Partnerships", value: "partnerships@modena360.com" },
                { label: "Productions", value: "productions@modena360.com" },
                { label: "Press", value: "press@modena360.com" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span
                    className="text-xs tracking-widest uppercase font-medium"
                    style={{ color: "#e6d08e" }}
                  >
                    {label}
                  </span>
                  <span className="text-sm" style={{ color: "#acbfc3" }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Lounge image accent */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-elevated">
              <img
                src="/assets/influencer-lounge-6.jpg"
                alt="Modena 360 luxury experience"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="glass-dark rounded-2xl p-12 text-center"
                data-ocid="contact-success"
              >
                <div className="text-5xl mb-6">✨</div>
                <h3
                  className="font-display text-3xl font-bold mb-4"
                  style={{ color: "#e6d08e" }}
                >
                  Message Received
                </h3>
                <p className="text-lg mb-8" style={{ color: "#acbfc3" }}>
                  Thank you for reaching out. Our team will be in touch within
                  24 hours to explore how we can work together.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialForm);
                  }}
                  className="btn-outline-gold px-8 py-3 text-sm rounded uppercase tracking-widest"
                  data-ocid="contact-reset"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-dark rounded-2xl p-8 sm:p-10 space-y-6"
                data-ocid="contact-form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-xs tracking-widest uppercase font-medium block"
                      style={{ color: "#e6d08e" }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-smooth focus-visible:ring-2 focus-visible:ring-[#e6d08e] focus-visible:ring-offset-0"
                      style={{
                        backgroundColor: "rgba(5,12,20,0.6)",
                        border: "1px solid rgba(230,208,142,0.2)",
                        color: "#acbfc3",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(230,208,142,0.6)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(230,208,142,0.2)";
                      }}
                      data-ocid="contact-input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="text-xs tracking-widest uppercase font-medium block"
                      style={{ color: "#e6d08e" }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-smooth focus-visible:ring-2 focus-visible:ring-[#e6d08e] focus-visible:ring-offset-0"
                      style={{
                        backgroundColor: "rgba(5,12,20,0.6)",
                        border: "1px solid rgba(230,208,142,0.2)",
                        color: "#acbfc3",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(230,208,142,0.6)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(230,208,142,0.2)";
                      }}
                      data-ocid="contact-input-email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-company"
                    className="text-xs tracking-widest uppercase font-medium block"
                    style={{ color: "#e6d08e" }}
                  >
                    Company / Brand
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    placeholder="Your company or brand name"
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-smooth focus-visible:ring-2 focus-visible:ring-[#e6d08e] focus-visible:ring-offset-0"
                    style={{
                      backgroundColor: "rgba(5,12,20,0.6)",
                      border: "1px solid rgba(230,208,142,0.2)",
                      color: "#acbfc3",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(230,208,142,0.6)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(230,208,142,0.2)";
                    }}
                    data-ocid="contact-input-company"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-service"
                    className="text-xs tracking-widest uppercase font-medium block"
                    style={{ color: "#e6d08e" }}
                  >
                    Service of Interest
                  </label>
                  <select
                    id="contact-service"
                    value={form.serviceType}
                    onChange={(e) =>
                      handleChange("serviceType", e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-smooth appearance-none cursor-pointer focus-visible:ring-2 focus-visible:ring-[#e6d08e] focus-visible:ring-offset-0"
                    style={{
                      backgroundColor: "rgba(5,12,20,0.6)",
                      border: "1px solid rgba(230,208,142,0.2)",
                      color: form.serviceType ? "#acbfc3" : "#585d68",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(230,208,142,0.6)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(230,208,142,0.2)";
                    }}
                    data-ocid="contact-select-service"
                  >
                    <option
                      value=""
                      disabled
                      style={{ backgroundColor: "#050c14" }}
                    >
                      Select a service...
                    </option>
                    {serviceOptions.map((opt) => (
                      <option
                        key={opt}
                        value={opt}
                        style={{ backgroundColor: "#050c14", color: "#acbfc3" }}
                      >
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-xs tracking-widest uppercase font-medium block"
                    style={{ color: "#e6d08e" }}
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your brand, goals, and how you'd like to work together..."
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-smooth resize-none focus-visible:ring-2 focus-visible:ring-[#e6d08e] focus-visible:ring-offset-0"
                    style={{
                      backgroundColor: "rgba(5,12,20,0.6)",
                      border: "1px solid rgba(230,208,142,0.2)",
                      color: "#acbfc3",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(230,208,142,0.6)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(230,208,142,0.2)";
                    }}
                    data-ocid="contact-textarea-message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full py-4 text-sm rounded uppercase tracking-widest font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                  data-ocid="contact-submit"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
