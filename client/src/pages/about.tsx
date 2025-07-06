import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Facebook, ArrowLeft, Users, Award, Clock, Target } from "lucide-react";

import { useScrollToTop } from "@/hooks/use-scroll-to-top";

export default function About() {
  useScrollToTop();
  
  useEffect(() => {
    document.title = "Acerca de Nosotros - AudioTech";
  }, []);

  const features = [
    {
      icon: Users,
      title: "Equipo Profesional",
      description: "Más de 15 técnicos especializados en audio e iluminación profesional"
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Certificaciones internacionales y equipos de última generación"
    },
    {
      icon: Clock,
      title: "10+ Años de Experiencia",
      description: "Una década perfeccionando el arte de la producción audiovisual"
    },
    {
      icon: Target,
      title: "Enfoque Personalizado",
      description: "Soluciones adaptadas a las necesidades específicas de cada evento"
    }
  ];

  const images = [
    "https://media.discordapp.net/attachments/1360125810094112962/1391196401467129946/3.jpg?ex=686b041d&is=6869b29d&hm=af320ae0fc3d408945e8bfd3dd9b749739329ac88aacdadbd72176d1591178d6&=&format=webp&width=1288&height=650",
    "https://media.discordapp.net/attachments/1360125810094112962/1391196401110876362/2.jpg?ex=686b041d&is=6869b29d&hm=6237b72fa4177b10778b89bede9f6b1903a5cc3508299075d377d9dc0c684fdf&=&format=webp&width=912&height=684",
    "https://scontent.fntr6-2.fna.fbcdn.net/v/t39.30808-6/491849583_1242477764550415_8992144475213072296_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Jaaqctxgv4gQ7kNvwHA6lyB&_nc_oc=AdnxotXetj5Z8Y5HDrw5FQPRuR4-E01YyB0OH7hvj8rF22eiED-qGOb2vfu_UZOtfMKUNpAi8-Y8xksWZCz99cfT&_nc_zt=23&_nc_ht=scontent.fntr6-2.fna&_nc_gid=edRyYw-U3S6VA9tFdzcxeQ&oh=00_AfSf7nOixiwohYbyH53PGTw0YtQWCEdyIVv5O5TbJuo3cg&oe=686F6DF8",
    "https://scontent.fntr6-1.fna.fbcdn.net/v/t39.30808-6/491489156_1242276264570565_5084849397288561342_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ekap8KQHGLYQ7kNvwGrPml4&_nc_oc=AdkkIuUyHV9hXgNCmutW5xopOXWEcR_iLHBO_p_qFmqVPbr8rpn17WLXM1PkL3K0yF7TMP6tKk9yAZsRbhDDcYAq&_nc_zt=23&_nc_ht=scontent.fntr6-1.fna&_nc_gid=cRNllV67B01nzPS_S3tfPA&oh=00_AfSZYFRArdedPGxvxbnDKLyfCd7EVZ37eXdQoGGZmDOj1g&oe=686F8995"
  ];

  return (
    <div className="pt-16 sm:pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/">
              <Button variant="ghost" className="text-white hover:text-gray-300 p-0">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Volver al Inicio
              </Button>
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Acerca de</span>
              <br />
              <span className="text-white">AudioTech</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Somos líderes en producción audiovisual, combinando pasión, tecnología y experiencia 
              para crear experiencias inolvidables en cada evento.
            </p>
          </motion.div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-white">Nuestra Historia</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Audio Tech nació de la pasión por el audio y la producción de eventos. Nos especializamos en brindar servicios audiovisuales de alta calidad para todo tipo de eventos.


              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Trabajamos con equipos profesionales de última generación, garantizando la mejor calidad de sonido e iluminación para satisfacer las necesidades de nuestros clientes.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Nuestra misión es ofrecer soluciones audiovisuales innovadoras y superar las expectativas en cada proyecto que realizamos.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {images.map((src, index) => (
                <motion.img
                  key={index}
                  src={src}
                  alt={`Equipo profesional ${index + 1}`}
                  className="rounded-xl shadow-lg hover-scale w-full h-48 object-cover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                />
              ))}
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text leading-relaxed">
              ¿Por qué elegir AudioTech?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-2xl p-6 text-center hover-scale"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 gradient-text">Nuestra Misión</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Transformar ideas en experiencias audiovisuales extraordinarias, proporcionando 
              soluciones técnicas innovadoras y un servicio excepcional que supere las expectativas 
              de nuestros clientes en cada evento.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={() => window.open('https://www.facebook.com/profile.php?id=100063646085550&locale=es_LA', '_blank')}
                className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all hover-scale flex items-center space-x-2"
              >
                <Facebook className="w-5 h-5" />
                <span>Síguenos en Facebook</span>
              </Button>
            </div>
          </motion.div>

        </div>
    </div>
  );
}