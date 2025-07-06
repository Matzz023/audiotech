import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";

export default function AboutSection() {
  const images = [
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">¿Quiénes Somos?</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Somos una empresa especializada en producción audiovisual con más de 10 años de experiencia. 
              Nuestra dedicación y pasión por la excelencia nos ha convertido en líderes del sector.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Contamos con el mejor equipo humano y tecnológico para hacer realidad tus proyectos más ambiciosos. 
              Desde eventos corporativos hasta producciones artísticas, brindamos soluciones integrales de audio e iluminación.
            </p>
            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => window.open('https://www.facebook.com/profile.php?id=100063646085550&locale=es_LA', '_blank')}
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all hover-scale flex items-center space-x-2"
              >
                <Facebook className="w-5 h-5" />
                <span>Síguenos en Facebook</span>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {images.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Equipo profesional ${index + 1}`}
                className="rounded-xl shadow-lg hover-scale w-full h-48 object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
