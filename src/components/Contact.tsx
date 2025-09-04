"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { name, email, message };

    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 px-6 py-20 flex items-center"
    >
      <div className="mx-auto max-w-6xl w-full">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16 text-cyan-400 drop-shadow-lg flex items-center justify-center gap-3"
        >
          Let’s Connect
          <Lightbulb
            className={`w-10 h-10 transition-all duration-500 ${
              isHovered
                ? "text-yellow-400 fill-yellow-400 drop-shadow-[0_0_15px_#facc15]"
                : "text-gray-500"
            }`}
          />
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-semibold text-white">Get in Touch</h3>
            <p className="text-white/80 leading-relaxed text-lg">
              🌟 “Every connection begins with a simple hello. Whether you want
              to build something extraordinary, share a vision, or just exchange
              ideas — I’d love to hear from you. 💡✨ Let’s turn your thoughts
              into something beautiful together.”
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition">
                <Phone className="text-cyan-400" size={22} />
                <span className="text-white/90 text-lg">+91 970809087</span>
              </div>

              <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition">
                <Mail className="text-cyan-400" size={22} />
                <span className="text-white/90 text-lg">
                  han1dhakumar@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition">
                <MapPin className="text-cyan-400" size={22} />
                <span className="text-white/90 text-lg">
                  Ambal Nagar, Kilkattalai, Chennai, Tamil Nadu
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 p-10 shadow-xl space-y-6 hover:shadow-cyan-500/30 transition"
          >
            <div>
              <label className="block text-sm text-white/70 mb-2">Name</label>
              <input
                className="w-full rounded-lg bg-black/40 px-4 py-3 border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 outline-none transition"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-2">Email</label>
              <input
                type="email"
                className="w-full rounded-lg bg-black/40 px-4 py-3 border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 outline-none transition"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full rounded-lg bg-black/40 px-4 py-3 border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 outline-none transition"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center flex justify-center">
              <button
                type="submit"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex items-center gap-2 rounded-full bg-cyan-600 px-10 py-3 font-semibold text-white hover:bg-cyan-500 shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
