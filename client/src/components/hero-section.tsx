import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center space-pattern">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-white rounded-full opacity-30 floating-element"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-white rounded-full opacity-50 floating-element"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-white rounded-full opacity-40 floating-element"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="gradient-text">Producción</span><br />
          <span className="text-white">Audiovisual</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Equipos profesionales para eventos de alta calidad
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            onClick={() => scrollToSection("equipos")}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all hover-scale text-lg"
          >
            Conocer Más
          </Button>
          <Button 
            onClick={() => scrollToSection("equipos")}
            variant="outline"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all hover-scale text-lg"
          >
            Ver Equipos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
