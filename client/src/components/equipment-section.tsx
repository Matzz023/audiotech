import { motion } from "framer-motion";
import { Mic, Volume2, Monitor, Sliders, Lightbulb, Video, CheckCircle } from "lucide-react";

export default function EquipmentSection() {
  const equipment = [
    {
      icon: Mic,
      title: "Kit Profesional de Micrófonos Shure",
      description: "Micrófonos de alta gama para captura de audio profesional en cualquier entorno.",
      feature: "Calidad profesional"
    },
    {
      icon: Volume2,
      title: "Bocinas Profesionales",
      description: "Sistemas de sonido de alta potencia para eventos de cualquier magnitud.",
      feature: "Sonido cristalino"
    },
    {
      icon: Monitor,
      title: "Sistema de Monitores QSC K12.2",
      description: "Monitores activos de alta definición para monitoreo profesional.",
      feature: "Respuesta precisa"
    },
    {
      icon: Sliders,
      title: "Procesador de Efectos Digitales",
      description: "Procesamiento avanzado de audio con múltiples efectos y configuraciones.",
      feature: "Efectos avanzados"
    },
    {
      icon: Lightbulb,
      title: "Sistema de Iluminación Profesional",
      description: "Iluminación LED profesional con control DMX para ambientación perfecta.",
      feature: "Control total"
    },
    {
      icon: Video,
      title: "Equipo de Grabación 4K",
      description: "Cámaras y equipos de grabación de ultra alta definición para producciones profesionales.",
      feature: "Calidad 4K"
    }
  ];

  return (
    <section id="equipos" className="py-20 bg-black space-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Nuestros Equipos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contamos con la más avanzada tecnología audiovisual para garantizar la excelencia en cada evento
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl p-6 hover-scale"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 mb-4">
                <item.icon className="w-12 h-12 text-white mb-2" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-300 mb-4">
                {item.description}
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>{item.feature}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
