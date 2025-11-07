# Ritual Café — Guía completa

Sitio estático educativo sobre café: granos, molienda, cafeteras/métodos, tiempos de infusión y recetas. Incluye calculadora de proporciones con historial, preguntas frecuentes y mapa embebido.

<h2>🌲 Estructura del proyecto</h2>
<pre>
.
├── index.html
├── quienes.html
├── granos-molienda.html
├── infusion.html
├── cafeteras-metodos.html
├── recetas.html
├── faq-contacto.html
├── CSS/
│   └── styles.css
├── JS/
│   └── script.js
└── assets/
    ├── icons/
    ├── images/
    └── hero/
</pre>

> Nota: Las rutas a CSS/JS en los HTML usan `CSS/styles.css` y `JS/script.js`.

## 📄 Páginas

- **Inicio (`index.html`)**  
  Portada con hero e imagen destacada, CTA a calculadora de proporciones y **video de YouTube** embebido (lazy, políticas seguras).  
- **Quiénes somos (`quienes.html`)**  
  Presentación del proyecto + **Google Maps embebido** con enlaces rápidos (“Ver en Maps / Cómo llegar”).  
- **Tipos de grano y molienda (`granos-molienda.html`)**  
  Fichas de Arábica, Robusta, Liberica y Excelsa; además, secciones de **tuestes** y **moliendas**.  
- **Tiempos de infusión (`infusion.html`)**  
  Tabla de referencia por método y **calculadora de proporciones** (selector de método/ratio, cálculo desde café o desde agua), con **historial**, **exportar CSV** y **limpiar historial**.  
- **Cafeteras / Métodos (`cafeteras-metodos.html`)**  
  Tarjetas de Prensa, V60, Moka, Espresso + **paso a paso** por método.  
- **Recetas (`recetas.html`)**  
  Recetas clásicas y de autor (V60, prensa, moka, espresso, americano, cold brew, tonic, etc.).  
- **FAQ / Contacto (`faq-contacto.html`)**  
  Preguntas frecuentes en `<details>` y formulario de contacto accesible.

## 🧩 Tecnologías

- **HTML5** semántico
- **CSS** (hoja única en `CSS/styles.css`) con variables, grid y utilitarias
- **JavaScript** (`JS/script.js`) para interactividad ligera

## ⚙️ Funcionalidades destacadas

- **Switch de tema (Sistema/Claro/Oscuro)** y **botón “Volver arriba”** presentes en todas las páginas.  
- **Navbar accesible** con estado de página activa y **skip link** al contenido.  
- **Calculadora** con ratio por método, salida en vivo, historial persistente y exportación a CSV.  
- **Embeds**: video (inicio) y mapa (quiénes).

## 🖥️ Ejecutar localmente

1. Cloná o descargá el repositorio.  
2. Abrí `index.html` en tu navegador (no requiere build).  
   - Sugerido: usar la extensión **Live Server** de VS Code para autorecarga.

## 🛠️ Guía de edición

- **Nueva página**: duplicá una existente para heredar `<head>`, cabecera, botón de tema y footer. Ajustá `<title>` y el enlace activo del menú.  
- **Estilos**: centralizados en `CSS/styles.css`. Reutilizá clases (`.container`, `.grid`, `.card`, `.btn`, etc.) y variables CSS.  
- **Scripts**: cargá siempre con `defer` y sin bloquear el render (`<script src="JS/script.js" defer></script>`).

## ♿ Accesibilidad

- Enlace “Saltar al contenido”.  
- Foco visible y roles/atributos ARIA (por ejemplo, `aria-current="page"`).  
- Imágenes con `alt` descriptivo; formularios con `label`.

## 🔎 SEO básico

- Metadatos por página: `<title>` y `<meta name="description">`.  
- Enlaces internos claros y contenido estructurado.

## 🧪 Recomendaciones

- Probar en navegadores modernos (desktop/mobile).  
- Optimizar imágenes (peso y `alt`).  
- Mantener consistencia de componentes y espaciados.

## 📄 Licencia

Proyecto educativo/de práctica. Usá y adaptá libremente; verificá derechos de imágenes o recursos externos en producción.
