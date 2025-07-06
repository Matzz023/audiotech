import { useEffect, useState } from "react";
import { Link } from "wouter";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, MessageCircle, ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  useScrollToTop();
  
  useEffect(() => {
    document.title = "Contacto - AudioTech";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaremos pronto. Gracias por tu interés.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+52 878 791 1127"],
      color: "bg-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["ezequiel.m9321@gmail.com"],
      color: "bg-red-600"
    },
    {
      icon: MapPin,
      title: "Dirección",
      details: ["Pomelo 927, Amp Año 2000, 26083 Piedras Negras, Coah."],
      color: "bg-green-600"
    },
    {
      icon: Clock,
      title: "Horario de Atención",
      details: ["Lunes - Viernes: 9:00 - 18:00", "Sábados: 10:00 - 14:00"],
      color: "bg-purple-600"
    }
  ];

  const socialLinks = [
    { icon: Facebook, color: "bg-blue-600 hover:bg-blue-700", href: "https://www.facebook.com/profile.php?id=100063646085550&locale=es_LA", name: "Facebook" },
    { icon: Instagram, color: "bg-pink-600 hover:bg-pink-700", href: "https://www.instagram.com/audio_tech_college/", name: "Instagram" },
    { icon: Youtube, color: "bg-red-600 hover:bg-red-700", href: "https://youtube.com", name: "YouTube" },
    { icon: MessageCircle, color: "bg-green-600 hover:bg-green-700", href: "https://whatsapp.com", name: "WhatsApp" }
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
              <span className="gradient-text">Contáctanos</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Estamos listos para hacer realidad tu próximo evento. Contáctanos para una 
              cotización personalizada y descubre cómo podemos ayudarte.
            </p>
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-2xl p-6 text-center hover-scale"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                {item.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-300 text-sm">{detail}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form and Social Media */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold mb-6 text-white">Envíanos un Mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-white font-medium">Nombre Completo</label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-white h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-white font-medium">Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-white h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-white font-medium">Teléfono</label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="+34 123 456 789"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-white h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-white font-medium">Mensaje</label>
                  <Textarea
                    name="message"
                    placeholder="Cuéntanos sobre tu evento..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-white resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-white text-black py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all hover-scale text-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensaje</span>
                </Button>
              </form>
            </motion.div>

            {/* Social Media and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-8"
            >
              {/* Social Media */}
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-3xl font-bold mb-6 text-white">Redes Sociales</h3>
                <p className="text-gray-300 mb-6">
                  Síguenos en nuestras redes sociales para ver nuestros últimos trabajos y 
                  mantenerte al día con las novedades del sector.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} rounded-xl p-4 flex items-center space-x-3 transition-all hover-scale`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                      <span className="text-white font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Información Adicional</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-bold text-white mb-2">Servicios de Emergencia</h4>
                    <p className="text-sm">Disponemos de servicio técnico 24/7 para eventos especiales.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Cobertura</h4>
                    <p className="text-sm">Prestamos servicios en toda España y Europa.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Cotizaciones</h4>
                    <p className="text-sm">Todas nuestras cotizaciones son gratuitas y personalizadas.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
    </div>
  );
}