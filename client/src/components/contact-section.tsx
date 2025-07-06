import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
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
      details: ["+34 912 345 678", "+34 687 654 321"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@proaudio.com", "ventas@proaudio.com"]
    },
    {
      icon: MapPin,
      title: "Dirección",
      details: ["Calle Ejemplo 123", "28001 Madrid, España"]
    },
    {
      icon: Clock,
      title: "Horario de Atención",
      details: ["Lunes - Viernes: 9:00 - 18:00", "Sábados: 10:00 - 14:00"]
    }
  ];

  const socialLinks = [
    { icon: Facebook, color: "bg-blue-600 hover:bg-blue-700", href: "https://facebook.com" },
    { icon: Instagram, color: "bg-pink-600 hover:bg-pink-700", href: "https://instagram.com" },
    { icon: Youtube, color: "bg-red-600 hover:bg-red-700", href: "https://youtube.com" },
    { icon: MessageCircle, color: "bg-green-600 hover:bg-green-700", href: "https://whatsapp.com" }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Contáctanos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos listos para hacer realidad tu próximo evento. Contáctanos para una cotización personalizada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    {item.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-300">{detail}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="glass-effect rounded-2xl p-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Tu Nombre"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-white"
              />
              <Input
                type="email"
                name="email"
                placeholder="Tu Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-white"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Tu Teléfono"
                value={formData.phone}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-white"
              />
              <Textarea
                name="message"
                placeholder="Tu Mensaje"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-white resize-none"
              />
              <Button 
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all hover-scale"
              >
                Enviar Mensaje
              </Button>
            </form>

            {/* Social Media */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="text-lg font-bold mb-4 text-white">Síguenos en Redes Sociales</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all hover-scale ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
