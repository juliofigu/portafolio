import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Code, Zap, Wifi, Palette, Video, Monitor, Star, ChevronRight, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useFormValidation } from "@/hooks/useFormValidation";
import { FormField } from "@/components/FormField";

/**
 * Portafolio Profesional de Julio
 * Diseño: Minimalismo Corporativo Moderno
 * Paleta: Blanco, Gris Oscuro, Azul Profundo (#0066ff), Cian (#00d9ff)
 * Tipografía: Poppins (titulares), Inter (cuerpo)
 */

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  const { values, errors, touched, handleChange, handleBlur, validateForm, resetForm, isFormValid } = useFormValidation({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  // Scroll suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Cerrar menú al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer para animaciones de scroll
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      elements.forEach((el) => observerRef.current?.unobserve(el));
    };
  }, []);

  // Manejar envío del formulario
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSubmitted(true);
      resetForm();
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAVEGACIÓN */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">JulioFigueroa</div>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className={`text-sm font-medium transition-colors ${
                activeSection === "inicio" ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className={`text-sm font-medium transition-colors ${
                activeSection === "servicios" ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("testimonios")}
              className={`text-sm font-medium transition-colors ${
                activeSection === "testimonios" ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            >
              Contacto
            </button>
          </div>

          {/* Botón Menú Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 p-4 space-y-3">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("testimonios")}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 font-medium"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="block w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
            >
              Contacto
            </button>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Soluciones Tecnológicas a tu Medida
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Simplifico lo complejo para que tú avances sin obstáculos. Experto en soporte IT remoto, desarrollo web y optimización de sistemas. Mi objetivo es ofrecerte resultados rápidos y eficientes, estés donde estés.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="btn-primary"
                >
                  Hablemos de tu Necesidad
                </button>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="btn-secondary"
                >
                  Conoce mis Servicios
                </button>
              </div>

              {/* Estadísticas */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200" data-animate id="stats">
                <div>
                  <p className="text-2xl font-bold text-blue-600">15+</p>
                  <p className="text-sm text-gray-600">Años de Experiencia</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">100+</p>
                  <p className="text-sm text-gray-600">Clientes Satisfechos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">24/7</p>
                  <p className="text-sm text-gray-600">Disponible Remoto</p>
                </div>
              </div>
            </div>

            {/* Imagen */}
            <div className="flex justify-center animate-fade-in">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-2xl blur-2xl opacity-20"></div>
                <img
                  src="./JulioF_remove.png"
                  alt="Julio - Experto en Soluciones Tecnológicas"
                  className="relative w-full rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS */}
      <section id="servicios" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servicios que Ofrezco
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones completas para tus necesidades tecnológicas. Desde soporte técnico hasta desarrollo web.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-animate id="services">
            {/* Tarjeta 1: Soporte IT */}
            <div className="service-card group" data-animate id="service-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Monitor className="text-blue-600 group-hover:text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Soporte IT Remoto</h3>
              <p className="text-gray-600 mb-4">
                Resuelvo problemas urgentes de software, arranque y rendimiento en Windows 10/11. Diagnóstico y solución rápida.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  Problemas de arranque
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  Instalación de software
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  Resolución de errores
                </li>
              </ul>
            </div>

            {/* Tarjeta 2: Optimización */}
            <div className="service-card group" data-animate id="service-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Zap className="text-blue-600 group-hover:text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimización de Sistemas</h3>
              <p className="text-gray-600 mb-4">
                Acelero el inicio y funcionamiento de tu PC. Limpio, configuro y optimizo para máxima velocidad.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  Aceleración de inicio
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  Mejora de rendimiento
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  Limpieza profunda
                </li>
              </ul>
            </div>

            {/* Tarjeta 3: Redes */}
            <div className="service-card group" data-animate id="service-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Wifi className="text-blue-600 group-hover:text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Redes y Conectividad</h3>
              <p className="text-gray-600 mb-4">
                Soluciono problemas de redes cableadas e inalámbricas. Configuro equipos Mikrotik para estabilidad.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  Diagnóstico de redes
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  Configuración Mikrotik
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  Conexión estable
                </li>
              </ul>
            </div>

            {/* Tarjeta 4: Desarrollo Web */}
            <div className="service-card group" data-animate id="service-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Code className="text-blue-600 group-hover:text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Desarrollo Web</h3>
              <p className="text-gray-600 mb-4">
                Creo páginas web y portafolios modernos con diseño responsive. Herramientas actuales y funcionales.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  Portafolios profesionales
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  Diseño responsive
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  Optimizado para SEO
                </li>
              </ul>
            </div>

            {/* Tarjeta 5: Edición Gráfica */}
            <div className="service-card group" data-animate id="service-5">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Palette className="text-blue-600 group-hover:text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Edición Gráfica</h3>
              <p className="text-gray-600 mb-4">
                Ediciones precisas en documentos e imágenes con Adobe Photoshop. Acabado profesional.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  Edición de imágenes
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  Modificación de documentos
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  Diseño profesional
                </li>
              </ul>
            </div>

            {/* Tarjeta 6: Edición de Video */}
            <div className="service-card group" data-animate id="service-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Video className="text-blue-600 group-hover:text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Edición de Video</h3>
              <p className="text-gray-600 mb-4">
                Edito videos cortos y dinámicos con CapCut. Perfecto para redes sociales y presentaciones.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  Edición profesional
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  Contenido para redes
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  Efectos y transiciones
                </li>
              </ul>
            </div>

            {/* Tarjeta 7: Creacion de Web Profesional */}
            <div className="service-card group" data-animate id="service-7">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Code className="text-blue-600 group-hover:text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Creacion de Web Profesional</h3>
              <p className="text-gray-600 mb-4">
                Diseno y desarrollo de portafolios web modernos con tecnologia React. Responsive, rapido y optimizado para conversiones.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  React + Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  Diseno Responsive
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600" />
                  SEO Optimizado
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-3"><strong>Caso de Estudio:</strong> Este portafolio</p>
                <a
                  href="#inicio"
                  className="inline-block px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE TESTIMONIOS */}
      <section id="testimonios" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que Dicen mis Clientes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Testimonios reales de personas que confiaron en mis servicios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6" data-animate id="testimonials">
            {/* Testimonio 1 */}
            <div className="testimonial-card" data-animate id="testimonial-1">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-blue-600 text-blue-600" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Tenía reinicios constantes en mi laptop justo el día de varias reuniones importantes. Julio lo solucionó de forma remota con una rapidez y profesionalismo increíbles. ¡Me salvó el día!"
              </p>
              <p className="font-semibold text-gray-900">Isabel López</p>
              <p className="text-sm text-gray-600">Cartagena, Colombia</p>
            </div>

            {/* Testimonio 2 */}
            <div className="testimonial-card" data-animate id="testimonial-2">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-blue-600 text-blue-600" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Mi computadora estaba tan lenta que era imposible trabajar. Julio le devolvió la vida, optimizó todo el sistema y ahora funciona más rápido que nunca. Un servicio excepcional."
              </p>
              <p className="font-semibold text-gray-900">Isaelia Rojas</p>
              <p className="text-sm text-gray-600">Buenos Aires, Argentina</p>
            </div>

            {/* Testimonio 3 */}
            <div className="testimonial-card" data-animate id="testimonial-3">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-blue-600 text-blue-600" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Mi PC no arrancaba y temía haber perdido todo. Con la guía puntual de Julio, formateamos el equipo, reinstalamos todo el software necesario y pude volver a mi trabajo en tiempo récord."
              </p>
              <p className="font-semibold text-gray-900">Oscar Chirinos</p>
              <p className="text-sm text-gray-600">Medellín, Colombia</p>
            </div>

            {/* Testimonio 4 */}
            <div className="testimonial-card" data-animate id="testimonial-4">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-blue-600 text-blue-600" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "He necesitado hacer ajustes muy específicos en varios documentos importantes y Julio siempre ha realizado las ediciones de manera impecable y rápida. Su atención al detalle es de primer nivel."
              </p>
              <p className="font-semibold text-gray-900">Claudio Bravo</p>
              <p className="text-sm text-gray-600">Dallas, Texas</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CONTACTO */}
      <section id="contacto" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hablemos de tu Proyecto
              </h2>
              <p className="text-lg text-gray-600">
                Estoy disponible para atender tus necesidades. Contáctame por cualquiera de estos medios.
              </p>
            </div>

            {/* Información de contacto */}
            <div className="grid md:grid-cols-3 gap-6 mb-12" data-animate id="contact-info">
              <div className="text-center px-2"> {/* Añadimos un pequeño margen lateral con px-2 */}
               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
               <Mail className="text-blue-600" size={24} />
               </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a 
                href="mailto:ingresosconstantesimparables@gmail.com" 
                className="text-blue-600 hover:text-blue-700 font-medium break-all block" // Añadimos 'break-all' y 'block'
                >
                ingresosconstantesimparables@gmail.com
                </a>
              </div>


              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <a href="https://wa.me/584121245521" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
                  +58 412 124 5521
                </a>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Ubicación</h3>
                <p className="text-gray-600 font-medium">
                  Disponible Remoto
                </p>
              </div>
            </div>

            {/* Formulario de contacto */}
            {/* Formulario de contacto corregido */}
            <form className="space-y-6 bg-gray-50 p-8 rounded-xl" action="https://formspree.io/f/xovnqaeq" // Tu ID de Formspree
             method="POST" data-animate id="contact-form"
>              {formSubmitted && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-fade-in">
                  ✓ ¡Gracias! Tu mensaje ha sido enviado correctamente. Me pondré en contacto pronto.
                </div>
              )}

              <FormField
                label="Nombre Completo"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                value={values.nombre}
                error={errors.nombre}
                touched={touched.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />

              <FormField
                label="Email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={values.email}
                error={errors.email}
                touched={touched.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />

              <FormField
                label="Asunto"
                name="asunto"
                type="text"
                placeholder="¿Cuál es tu necesidad?"
                value={values.asunto}
                error={errors.asunto}
                touched={touched.asunto}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />

              <FormField
                label="Mensaje"
                name="mensaje"
                placeholder="Cuéntame sobre tu proyecto..."
                value={values.mensaje}
                error={errors.mensaje}
                touched={touched.mensaje}
                onChange={handleChange}
                onBlur={handleBlur}
                isTextarea
                rows={5}
                required
              />

              <button
               type="submit"
               className="w-full btn-primary"
               >
                Enviar Mensaje
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">JulioFigueroa</h3>
              <p className="text-gray-400">
                Soluciones tecnológicas y digitales para tu éxito remoto.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection("inicio")} className="hover:text-white transition-colors">
                    Inicio
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("servicios")} className="hover:text-white transition-colors">
                    Servicios
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("testimonios")} className="hover:text-white transition-colors">
                    Testimonios
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:ingresosconstantesimparables@gmail.com" className="hover:text-white transition-colors">
                    ingresosconstantesimparables@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/584121245521" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 JulioFigueroa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botón WhatsApp Flotante */}
      <a
        href="https://wa.me/584121245521?text=Hola%20Julio,%20vi%20tu%20portafolio%20y%20estoy%20interesado%20en%20tus%20servicios"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-40"
        title="Contactar por WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.955 1.303l-.355.214-3.699-.974.992 3.625-.235.374a9.86 9.86 0 001.516 5.394c1.487 2.386 3.899 3.898 6.5 3.898 1.6 0 3.134-.406 4.49-1.175l.355-.214 3.699.974-.992-3.625.235-.374a9.87 9.87 0 00-1.516-5.394c-1.487-2.386-3.899-3.898-6.5-3.898z" />
        </svg>
      </a>
    </div>
  );
}
