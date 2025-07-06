import { useEffect } from "react";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star } from "lucide-react";


export default function Equipment() {
  useScrollToTop();
  
  useEffect(() => {
    document.title = "Nuestros Equipos - AudioTech";
  }, []);

  const equipment = [
    {
      image:
        "https://audiopro.com.mx/wp-content/uploads/2022/10/kit_music_pro_shure.jpg",
      title: "Kit Profesional de Micrófonos Shure",
      description:
        "Micrófonos de alta gama para captura de audio profesional en cualquier entorno. Incluye múltiples modelos para diferentes aplicaciones.",
      features: [
        "Calidad profesional",
        "Respuesta de frecuencia plana",
        "Construcción robusta",
      ],
      rating: 5,
    },
    {
      image:
        "https://www.falymusic.com/images/detailed/57/LDDQOR5TB_1.jpg",
      title: "Bocinas Profesionales",
      description:
        "Sistemas de sonido de alta potencia para eventos de cualquier magnitud. Diseñadas para ofrecer claridad y potencia excepcionales.",
      features: ["Sonido cristalino", "Alta potencia", "Diseño profesional"],
      rating: 5,
    },
    {
      image:
        "https://www.karmamusic.mx/web/image/product.image/4465/image_1024/K12_2_Hero_Angles_02_updated.webp?unique=3e2abc8",
      title: "Sistema de Monitores QSC K12.2",
      description:
        "Monitores activos de alta definición para monitoreo profesional. Perfectos para escenarios y estudios de grabación.",
      features: [
        "Respuesta precisa",
        "Monitoreo profesional",
        "Tecnología DSP",
      ],
      rating: 5,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/513PFfYvQaL._UF1000,1000_QL80_.jpg",
      title: "Procesador de Efectos Digitales",
      description:
        "Procesamiento avanzado de audio con múltiples efectos y configuraciones. Control total sobre el sonido de tu evento.",
      features: [
        "Efectos avanzados",
        "Control digital",
        "Múltiples configuraciones",
      ],
      rating: 5,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24CldtZmMr9eNCZmwfL8eXQIC-2cQ6YsjaQ&s",
      title: "Sistema de Iluminación Profesional",
      description:
        "Iluminación LED profesional con control DMX para ambientación perfecta. Crea el ambiente ideal para cualquier evento.",
      features: ["Control total", "Iluminación LED", "Control DMX"],
      rating: 5,
    },
    {
      image:
        "https://www.streamingdiez.com/wp-content/uploads/2017/05/Blackmagic-4k-BigBoy-1024x768.jpg",
      title: "Equipo de Grabación 4K",
      description:
        "Cámaras y equipos de grabación de ultra alta definición para producciones profesionales. Calidad cinematográfica garantizada.",
      features: ["Calidad 4K", "Grabación profesional", "Tecnología avanzada"],
      rating: 5,
    },
    {
      image:
        "https://gamamusic.com/cdn/shop/files/DM3-1.jpg?v=1699292145",
      title: "Mesa de Mezclas Digital",
      description:
        "Consolas de mezcla digitales de última generación para control total del audio. Perfecta para eventos en vivo y grabaciones.",
      features: ["Control digital", "Múltiples canales", "Interfaz intuitiva"],
      rating: 5,
    },
    {
      image:
        "https://resources.sears.com.mx/medios-plazavip/t1/171827017038jpg",
      title: "Proyectores 4K",
      description:
        "Proyectores de ultra alta definición para presentaciones y eventos. Imagen nítida y colores vibrantes en cualquier superficie.",
      features: ["Resolución 4K", "Imagen nítida", "Colores vibrantes"],
      rating: 5,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJ1fBvvPs5jXCIJfTbXk06SAwVRaR5JHm2A&s",
      title: "Sistema de Monitores Profesionales",
      description:
        "Sistemas de monitoreo avanzados para control total del sonido en tiempo real. Precisión y claridad excepcionales.",
      features: ["Monitoreo en tiempo real", "Precisión profesional", "Control avanzado"],
      rating: 5,
    },
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/">
              <Button
                variant="ghost"
                className="text-white hover:text-gray-300 p-0"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Volver al Inicio
              </Button>
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Nuestros</span>
              <br />
              <span className="text-white">Equipos</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Contamos con la más avanzada tecnología audiovisual para
              garantizar la excelencia en cada evento. Equipos de última
              generación para resultados profesionales.
            </p>
          </motion.div>

          {/* Equipment Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-2xl overflow-hidden hover-scale"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 rounded-full px-2 py-1 flex items-center space-x-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mt-16"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              ¿Listo para tu próximo evento?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contáctanos para una cotización personalizada y descubre cómo
              podemos hacer que tu evento sea inolvidable.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all hover-scale text-lg">
                Solicitar Cotización
              </Button>
            </Link>
          </motion.div>
        </div>
    </div>
  );
}
