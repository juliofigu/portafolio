# Guía de Personalización - Portafolio de Julio

## 📋 Resumen

Este portafolio web profesional está diseñado como una herramienta de marketing digital para atraer clientes remotos. Utiliza un diseño minimalista corporativo moderno con animaciones suaves y elementos de conversión estratégicamente ubicados.

---

## 🎨 Diseño Visual

**Filosofía:** Minimalismo Corporativo Moderno
- **Paleta de Colores:** Blanco, Gris Oscuro, Azul Profundo (#0066ff), Cian (#00d9ff)
- **Tipografía:** Poppins (titulares), Inter (cuerpo)
- **Efectos:** Animaciones de scroll, hover effects, transiciones suaves

---

## 🔧 Personalización Requerida

### 1. **Información de Contacto**

Abre el archivo `client/src/pages/Home.tsx` y busca las siguientes líneas para actualizar con tus datos reales:

#### Email
```tsx
// Línea aproximada 370
<a href="mailto:julio@example.com" className="text-blue-600 hover:text-blue-700 font-medium">
  julio@example.com
</a>
```
**Cambia:** `julio@example.com` por tu email real

#### WhatsApp
```tsx
// Línea aproximada 385
<a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
  +57 300 123 4567
</a>
```
**Cambia:** `573001234567` por tu número de WhatsApp (sin espacios ni símbolos) y `+57 300 123 4567` por tu número formateado

#### Botón WhatsApp Flotante (al final de la página)
```tsx
// Línea aproximada 545
<a
  href="https://wa.me/573001234567?text=Hola%20Julio,%20vi%20tu%20portafolio%20y%20estoy%20interesado%20en%20tus%20servicios"
  target="_blank"
  rel="noopener noreferrer"
>
```
**Cambia:** `573001234567` por tu número de WhatsApp

#### Footer - Email y WhatsApp
```tsx
// Línea aproximada 495-500
<a href="mailto:julio@example.com" className="hover:text-white transition-colors">
  julio@example.com
</a>
```
y
```tsx
<a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
  WhatsApp
</a>
```

---

### 2. **Nombre y Branding**

#### Logo/Nombre en Navegación
```tsx
// Línea aproximada 105
<div className="text-2xl font-bold text-blue-600">Julio</div>
```
**Cambia:** `Julio` por tu nombre o marca personal

#### Footer
```tsx
// Línea aproximada 480
<h3 className="text-xl font-bold mb-4">Julio</h3>
```
**Cambia:** `Julio` por tu nombre

#### Título de la Página
En `client/index.html`:
```html
<title>Julio - Soluciones Tecnológicas Remotas</title>
```
**Cambia:** `Julio` por tu nombre

#### Meta Descripción
En `client/index.html`:
```html
<meta name="description" content="Soluciones tecnológicas y digitales remotas. Experto en soporte IT, desarrollo web y optimización de sistemas." />
```
**Personaliza:** La descripción según tus servicios específicos

---

### 3. **Foto Profesional**

Tu foto ya está incluida en `/client/public/julio-photo.png`

Si quieres cambiarla:
1. Reemplaza el archivo `client/public/julio-photo.png` con tu nueva foto
2. Asegúrate de que sea un archivo PNG o JPG de buena calidad
3. Preferiblemente con fondo blanco o neutro para mantener la coherencia visual

---

### 4. **Estadísticas Personales**

En la sección Hero, actualiza tus estadísticas reales:

```tsx
// Línea aproximada 191-200
<div>
  <p className="text-2xl font-bold text-blue-600">5+</p>
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
```

**Cambia los números** según tus datos reales

---

### 5. **Testimonios**

Los testimonios están basados en tus clientes reales. Si quieres agregar más o modificarlos, busca la sección "SECCIÓN DE TESTIMONIOS" (aproximadamente línea 320).

Cada testimonio tiene este formato:
```tsx
<div className="testimonial-card" data-animate id="testimonial-1">
  <div className="flex items-center gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} className="fill-blue-600 text-blue-600" />
    ))}
  </div>
  <p className="text-gray-700 mb-4 leading-relaxed">
    "Aquí va el texto del testimonio..."
  </p>
  <p className="font-semibold text-gray-900">Nombre del Cliente</p>
  <p className="text-sm text-gray-600">Ciudad, País</p>
</div>
```

Para agregar un nuevo testimonio, copia este bloque y cámbialo por tus datos.

---

### 6. **Servicios**

Los servicios están organizados en 6 tarjetas. Si quieres modificarlos, busca la sección "SECCIÓN DE SERVICIOS" (aproximadamente línea 220).

Cada servicio tiene este formato:
```tsx
<div className="service-card group" data-animate id="service-1">
  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
    <Monitor className="text-blue-600 group-hover:text-white" size={24} />
  </div>
  <h3 className="text-xl font-bold text-gray-900 mb-3">Título del Servicio</h3>
  <p className="text-gray-600 mb-4">
    Descripción del servicio...
  </p>
  <ul className="space-y-2 text-sm text-gray-600">
    <li className="flex items-center gap-2">
      <ChevronRight size={16} className="text-blue-600" />
      Característica 1
    </li>
    {/* más características */
  </ul>
</div>
```

**Para cambiar el ícono:** Reemplaza `Monitor` con otro ícono de `lucide-react` (disponibles: `Code`, `Zap`, `Wifi`, `Palette`, `Video`, etc.)

---

## 🚀 Cómo Ejecutar Localmente

```bash
# Instalar dependencias
cd /home/ubuntu/julio_portfolio
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Acceder a http://localhost:3000
```

---

## 📱 Responsive Design

El portafolio está completamente optimizado para:
- **Desktop:** 1024px y más
- **Tablet:** 640px a 1023px
- **Móvil:** Menos de 640px

Todos los elementos se adaptan automáticamente.

---

## 🔐 Seguridad

- El formulario de contacto está preparado para validación en cliente
- Para enviar emails reales, necesitarás integrar un servicio como:
  - Formspree
  - EmailJS
  - Un backend personalizado

---

## 📊 SEO y Analytics

El portafolio incluye:
- Meta tags optimizados para SEO
- Estructura semántica HTML
- Analytics integrado (Umami)

---

## 🎯 Próximos Pasos Recomendados

1. **Actualizar todos los datos personales** (email, teléfono, nombre)
2. **Solicitar testimonios reales** a tus clientes
3. **Integrar un servicio de formulario** para recibir mensajes
4. **Configurar un dominio personalizado** (opcional)
5. **Publicar el sitio** en Manus o tu hosting preferido

---

## 💡 Consejos para Maximizar Conversiones

1. **Foto Profesional:** Mantén una foto clara y profesional
2. **CTAs Claros:** Los botones de contacto están estratégicamente ubicados
3. **Testimonios Reales:** Agrega testimonios de clientes satisfechos
4. **Disponibilidad:** Mantén actualizada tu información de contacto
5. **Responsive:** Verifica que se vea bien en móviles (muy importante)

---

## 📞 Soporte

Si necesitas ayuda con la personalización, puedes:
1. Editar directamente los archivos en `client/src/pages/Home.tsx`
2. Consultar la documentación de React y Tailwind CSS
3. Usar el editor visual en la interfaz de Manus

---

**¡Tu portafolio está listo para atraer clientes remotos!** 🚀
