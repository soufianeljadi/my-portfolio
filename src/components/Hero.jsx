

function Hero() {
  return (
    <section className="py-20 flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4">
      
      {/* Picture */}
      <div className="w-48 h-48 md:w-64 md:h-64 mb-8 md:mb-0 md:mr-12 flex-shrink-0">
        <img
          src="/assets/benten.jpg"
          alt="Soufiane El Jadi"
          className="w-full h-full object-cover rounded-full shadow-lg"
        />
      </div>

      {/* Text */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Soufiane EL JADI</h1>
        <h2 className="text-xl md:text-2xl text-green-500 font-semibold mb-4">
          Software Engineer
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-lg">       
         I'm a passionate technologist with a solid foundation in C, C++, Java, J2EE, PHP, Laravel, Shell Scripting, and more. 
         </p>
         <p className="text-gray-700 text-lg md:text-xl max-w-lg">
        I pursued my education at University Sultan Moulay Slimane, where I earned a diploma as a Technicien Specialise after two years of dedicated study.
        </p>
        {/* <a
          href="#projects"
          className="mt-6 inline-block px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          See My Work
        </a> */}
      </div>

    </section>
  );
}


export default Hero;
