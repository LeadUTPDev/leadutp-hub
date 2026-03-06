# 🚀 LEAD UTP - Sitio Web Oficial

<p align="center">
  <strong>Learn. Explore. Aspire. Discover.</strong>
</p>

<p align="center">
  La comunidad que impulsa el talento humano para construir un mejor mañana.
</p>

---

## 📋 Descripción

Sitio web oficial de **LEAD UTP**, una organización estudiantil de la Universidad Tecnológica del Perú dedicada a impulsar el desarrollo profesional, liderazgo y excelencia académica de los estudiantes en el ámbito STEM.

## 🛠️ Tecnologías

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| React | 19.x | Biblioteca de UI |
| TypeScript | 5.x | Tipado estático |
| Vite | 7.x | Build tool y dev server |
| React Router DOM | 7.x | Enrutamiento SPA |
| Framer Motion | 12.x | Animaciones |
| Lucide React | - | Iconografía |
| CSS3 | - | Estilos con CSS Variables |

## 📁 Estructura del Proyecto

```
lead-utp-web/
├── public/
│   └── images/
│       ├── alianzas/          # Logos de aliados
│       ├── backgrounds/       # Fondos e imágenes de fondo
│       ├── logos/             # Logos de LEAD UTP
│       └── pilares/           # Imágenes de los 6 pilares
├── src/
│   ├── components/
│   │   ├── Header/            # Navegación principal con menú móvil
│   │   └── Footer/            # Pie de página
│   ├── pages/
│   │   ├── Home/              # Página principal
│   │   ├── About/             # Sobre nosotros
│   │   ├── Projects/          # Proyectos con filtros
│   │   └── Events/            # Eventos
│   ├── styles/
│   │   ├── tokens.css         # Design tokens (colores, tipografía, espaciado)
│   │   └── global.css         # Estilos globales y reset
│   ├── App.tsx                # Configuración de rutas
│   └── main.tsx               # Punto de entrada
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Design Tokens

Los colores y estilos están basados en el diseño de Figma oficial:

### Colores Principales
| Color | Código | Uso |
|-------|--------|-----|
| Primary | `#020c3e` | Fondo principal, textos |
| Secondary | `#d93340` | Acentos, Desarrollo Profesional |
| Optional 1 | `#a6249d` | Gradientes, Excelencia Femenina |
| Optional 3 | `#7856ee` | Botones, Liderazgo |

### Colores por Pilar
| Pilar | Color |
|-------|-------|
| Desarrollo Profesional | `#d93340` |
| Liderazgo | `#7856ee` |
| Excelencia Femenina | `#a6249d` |
| Desarrollo del Capítulo | `#0024d7` |
| Excelencia Académica | `#b74515` |
| LEAD Academia | `#c90fcf` |

## 🚀 Instalación

### Requisitos Previos
- Node.js 18+ 
- npm o yarn

### Pasos

```bash
# 1. Clonar el repositorio
git clone <url-del-repo>
cd lead-utp-web

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:5173
```

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera build de producción |
| `npm run preview` | Previsualiza build de producción |
| `npm run lint` | Ejecuta ESLint |

## 📱 Responsive Design

El sitio está optimizado para diferentes dispositivos:

| Breakpoint | Dispositivo |
|------------|-------------|
| > 1024px | Desktop |
| 768px - 1024px | Tablet |
| 480px - 768px | Mobile |
| < 480px | Mobile pequeño |

### Características Responsive
- ✅ Menú hamburguesa en móviles
- ✅ Navegación fullscreen en mobile
- ✅ Cards adaptativas
- ✅ Carousel con scroll táctil
- ✅ Tipografía escalable
- ✅ Imágenes optimizadas

## 📄 Páginas

### 🏠 Home (`/`)
- Hero con imagen del equipo
- Sección de alianzas
- Carousel de los 6 pilares

### 👥 Sobre Nosotros (`/about`)
- Significado de LEAD (Learn, Explore, Aspire, Discover)
- Misión y Visión
- Valores de la organización

### 📂 Proyectos (`/projects`)
- Grid de proyectos
- Filtros por pilar
- 18 proyectos de ejemplo

### 📅 Eventos (`/events`)
- Eventos próximos
- Eventos pasados
- Información de fecha, hora y ubicación

## 🤝 Alianzas

- DSC UTP
- CONEII
- Aeditip
- Levo Learning Center
- CV Matcher

## 📧 Contacto

- **Instagram**: [@leadutp](https://instagram.com/leadutp)
- **LinkedIn**: [LEAD UTP](https://linkedin.com/company/leadutp)
- **Discord**: Comunidad LEAD UTP

## 📝 Licencia

Este proyecto es propiedad de LEAD UTP - Universidad Tecnológica del Perú.

---

<p align="center">
  Hecho con ❤️ por el equipo de LEAD UTP - 2026
</p>
