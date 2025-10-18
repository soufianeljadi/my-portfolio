import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-green-950 overflow-hidden px-4">
      
      {/* Profile Picture */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, type: "spring" }}
        className="w-56 h-56 md:w-72 md:h-72 mb-10 md:mb-0 md:mr-12 flex-shrink-0 rounded-full border-8 border-green-500 shadow-2xl overflow-hidden"
      >
        <img
          src={process.env.PUBLIC_URL + "/assets/profile.jpg"}
          alt="Soufiane El Jadi"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, type: "spring" }}
        className="text-center md:text-left z-10"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold text-green-400 drop-shadow-xl animate-pulse">
          Soufiane EL JADI
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-white my-4">
          Software Engineer
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-6 ">
          I’m a passionate technologist with a strong foundation in C, C++, Java, PHP, Laravel, React and Shell Scripting. I earned my Technicien Spécialisé diploma from Sultan Moulay Slimane University, then continued developing my skills at 1337 Coding School, diving deeper into software development and computer science.
        </p>
                {/* <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-6">
          Continuing my quest for knowledge and growth, I embarked on a journey at School 1337, where I honed my skills further and delved deeper into the world of computer science and programming.
        </p> */}
        <div className="flex justify-center gap-4 mt-8">
  {/* See My Work button */}
  <motion.a
    href="#projects"
    whileHover={{ scale: 1.05 }}
    className="px-6 py-3 rounded-lg bg-green-500 text-black font-semibold shadow-[0_0_15px_#00ff99] hover:bg-green-400 transition-all duration-300"
  >
    See My Work
  </motion.a>

  {/* Download CV button */}
  <motion.a
    href="/cv.pdf"
    download="Soufiane_El_Jadi_CV.pdf"
    whileHover={{ scale: 1.05 }}
    className="px-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold shadow-[0_0_15px_#facc15] hover:bg-yellow-300 transition-all duration-300"
  >
    Download My CV
  </motion.a>
</div>

      </motion.div>

      {/* Green Energy Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-red-500 opacity-10 rounded-full blur-3xl animate-pulse-slow"></div> */}
    </section>
  );
}

export default Hero;
