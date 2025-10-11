import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0a0f0a] to-[#101e10] text-white px-6 py-20"
    >
      {/* Animated Green Aura Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,100,0.15)_0%,_transparent_70%)] blur-3xl"></div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-12 text-center relative z-10"
      >
        Contact <span className="text-green-400">Me</span>
      </motion.h2>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl relative z-10">
        {/* Email */}
        <motion.a
          href="mailto:eljadi.souf@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-[#101e10] border border-green-400/30 rounded-2xl p-6 hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,100,0.4)] transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <FaEnvelope className="text-3xl text-green-400 mb-3" />
          <h3 className="font-semibold text-lg">Email</h3>
          <p className="text-sm text-gray-400">eljadi.souf@gmail.com</p>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/soufianeljadi/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-[#101e10] border border-green-400/30 rounded-2xl p-6 hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,100,0.4)] transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <FaLinkedin className="text-3xl text-green-400 mb-3" />
          <h3 className="font-semibold text-lg">LinkedIn</h3>
          <p className="text-sm text-gray-400">@soufianeljadi</p>
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/soufianeljadi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-[#101e10] border border-green-400/30 rounded-2xl p-6 hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,100,0.4)] transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <FaGithub className="text-3xl text-green-400 mb-3" />
          <h3 className="font-semibold text-lg">GitHub</h3>
          <p className="text-sm text-gray-400">soufianeljadi</p>
        </motion.a>

        {/* Phone */}
        <motion.div
          className="flex flex-col items-center justify-center bg-[#101e10] border border-green-400/30 rounded-2xl p-6 hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,100,0.4)] transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <FaPhone className="text-3xl text-green-400 mb-3" />
          <h3 className="font-semibold text-lg">Phone</h3>
          <p className="text-sm text-gray-400">+212 642 912 362</p>
        </motion.div>
      </div>

      {/* Glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-400/10 to-transparent blur-2xl"></div>
    </section>
  );
}
