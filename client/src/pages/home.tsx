import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Award } from "lucide-react";

import Footer from "@/components/footer";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

export default function Home() {
  useScrollToTop();

  useEffect(() => {
    document.title = "AudioTech";
  }, []);

  const features = [
    {
      icon: Users,
      title: "Equipo Profesional",
      description:
        "Más de 15 técnicos especializados trabajando para tu evento",
    },
    {
      icon: Zap,
      title: "Tecnología Avanzada",
      description: "Equipos de última generación para resultados excepcionales",
    },
    {
      icon: Award,
      title: "10+ Años de Experiencia",
      description: "Una década perfeccionando cada detalle audiovisual",
    },
  ];

  const stats = [
    { number: "500+", label: "Eventos Exitosos" },
    { number: "10+", label: "Años de Experiencia" },
    { number: "24/7", label: "Soporte Técnico" },
    { number: "100%", label: "Satisfacción Cliente" },
  ];

  return (
    <>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-16">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="gradient-text block mb-2">AudioTech</span>
              <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl block">
                Producción Audiovisual
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              AudioTech forma técnicos en audio altamente capacitados, listos para enfrentar los retos técnicos y creativos en la producción de eventos. Ofrecemos una formación de calidad, combinando teoría y práctica.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/about">
                <Button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all hover-scale text-lg flex items-center space-x-2">
                  <span>Conocer Más</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/equipment">
                <Button
                  variant="outline"
                  className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all hover-scale text-lg flex items-center space-x-2"
                >
                  Ver Equipos
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
                Por que elegir AudioTech
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Somos líderes en el sector audiovisual con una trayectoria
                impecable y un compromiso inquebrantable con la excelencia.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-2xl p-8 text-center hover-scale"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Nuestra <span className="gradient-text">Pasión</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  En Audio Tech, el audio es más que una disciplina: es una vocación que se vive con intensidad. Nos apasiona cada detalle técnico, cada desafío creativo y cada oportunidad de conectar emociones a través del sonido. Nuestro propósito va más allá de formar profesionales; buscamos inspirar, acompañar y dar herramientas a quienes sueñan con vivir de esto.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Cada persona que llega a Audio Tech comparte un mismo deseo: crecer, superarse y dejar huella en la industria. Nuestra pasión está en guiarlos en ese camino, brindándoles conocimientos, apoyo y un entorno que los motive a creer en sí mismos. Porque para nosotros, el audio es una forma de vida, y ver cómo los sueños se vuelven realidad es nuestra mayor recompensa.
                </p>

                <Link href="/about">
                  <Button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-all hover-scale flex items-center space-x-2">
                    <span>Conocer Más</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  "https://media.discordapp.net/attachments/1360125810094112962/1391196401807130714/111111.jpg?ex=686b041d&is=6869b29d&hm=38415b6900eb691b0f0921281d1e8f8c4a33710c51ebf8ad0c9864b7a7091396&=&format=webp&width=912&height=684",
                  "https://media.discordapp.net/attachments/1360125810094112962/1391196402310320179/atProducciones.jpg?ex=686b041d&is=6869b29d&hm=6253a052cb53fbf3db5337d3c411ec1427741cb21a474f74ff74e9918c50c36b&=&format=webp&width=912&height=684",
                  "https://media.discordapp.net/attachments/1360125810094112962/1391196400825532558/1.jpg?ex=686b041d&is=6869b29d&hm=0d2c1f43f79923888a9f4cf05380c4ad1c841792bb55975f243905b7a3e82d70&=&format=webp&width=912&height=684",
                  "https://media.discordapp.net/attachments/1360125810094112962/1391196384119488612/Sonorizacion.jpg?ex=686b0419&is=6869b299&hm=0ec8020c36c98d58fc10c28dfea2c6183caf82968b3cbf4a5f90a163fc04fff3&=&format=webp&width=912&height=684",
                ].map((src, index) => (
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

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text leading-relaxed"
            >
              ¿Listo para crear algo extraordinario?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Contáctanos hoy mismo y descubre cómo podemos transformar tu
              visión en una experiencia audiovisual única e inolvidable.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all hover-scale text-lg flex items-center space-x-2">
                  <span>Contáctanos</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/equipment">
                <Button
                  variant="outline"
                  className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all hover-scale text-lg flex items-center space-x-2"
                >
                  Ver Equipos
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

      <Footer />
    </>
  );
}
