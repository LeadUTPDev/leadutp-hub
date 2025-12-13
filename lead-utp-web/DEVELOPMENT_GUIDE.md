# 📘 Guía de Desarrollo - LEAD UTP Website

Este documento describe el flujo de trabajo y las guías para continuar el desarrollo del sitio web de LEAD UTP.

---

## 📑 Tabla de Contenidos

1. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
2. [Flujo de Desarrollo](#flujo-de-desarrollo)
3. [Guía de Estilos](#guía-de-estilos)
4. [Componentes](#componentes)
5. [Páginas](#páginas)
6. [Agregar Nuevas Funcionalidades](#agregar-nuevas-funcionalidades)
7. [Imágenes y Assets](#imágenes-y-assets)
8. [Despliegue](#despliegue)

---

## 🏗️ Arquitectura del Proyecto

### Stack Tecnológico
```
Frontend:
├── React 19 + TypeScript
├── Vite 7 (Build tool)
├── React Router DOM 7 (Routing)
├── Framer Motion (Animaciones)
├── Lucide React (Iconos)
└── CSS Variables (Design Tokens)
```

### Principios de Arquitectura

1. **Componentes Modulares**: Cada componente tiene su propia carpeta con `.tsx` y `.css`
2. **CSS Variables**: Todos los colores, tipografías y espaciados usan tokens
3. **Mobile-First**: Diseño responsive desde móvil hacia desktop
4. **Sin dependencias de UI**: Estilos CSS puros sin frameworks como Tailwind o Bootstrap

---

## 🔄 Flujo de Desarrollo

### 1. Configuración Inicial

```bash
# Clonar repositorio
git clone <repo-url>
cd lead-utp-web

# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev
```

### 2. Estructura de Branches

```
main                 # Producción
├── develop          # Desarrollo principal
├── feature/xxx      # Nuevas funcionalidades
├── fix/xxx          # Correcciones
└── hotfix/xxx       # Correcciones urgentes
```

### 3. Flujo de Trabajo

```
1. Crear branch desde develop
   git checkout -b feature/nueva-funcionalidad

2. Desarrollar y hacer commits
   git add .
   git commit -m "feat: descripción del cambio"

3. Push y crear PR
   git push origin feature/nueva-funcionalidad

4. Code review y merge a develop

5. Merge develop a main para producción
```

### 4. Convención de Commits

```
feat:     Nueva funcionalidad
fix:      Corrección de bug
docs:     Documentación
style:    Cambios de estilo (CSS)
refactor: Refactorización de código
test:     Tests
chore:    Tareas de mantenimiento
```

---

## 🎨 Guía de Estilos

### Design Tokens

Los tokens están definidos en `src/styles/tokens.css`:

#### Colores Principales
```css
--primary-color: #020c3e;      /* Fondo oscuro principal */
--secondary-color: #d93340;    /* Rojo - Desarrollo Profesional */
--optional-1-color: #a6249d;   /* Magenta - Excelencia Femenina */
--optional-3-color: #7856ee;   /* Púrpura - Liderazgo */
```

#### Colores por Pilar
| Pilar | Variable | Valor |
|-------|----------|-------|
| Desarrollo Profesional | `--pilar-desarrollo-profesional` | `#d93340` |
| Liderazgo | `--pilar-liderazgo` | `#7856ee` |
| Excelencia Femenina | `--pilar-excelencia-femenina` | `#a6249d` |
| Desarrollo del Capítulo | `--pilar-desarrollo-capitulo` | `#0024d7` |
| Excelencia Académica | `--pilar-excelencia-academica` | `#b74515` |
| LEAD Academia | `--pilar-lead-academia` | `#c90fcf` |

#### Tipografía
```css
--font-family-primary: 'Inter', sans-serif;
--font-size-base: 16px;
--font-size-lg: 18px;
--font-size-xl: 20px;
--font-size-2xl: 24px;
--font-size-3xl: 30px;
--font-size-4xl: 36px;
--font-size-6xl: 62px;
```

#### Espaciado
```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 48px;
--spacing-3xl: 64px;
--spacing-4xl: 80px;
```

### Breakpoints Responsive
```css
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Mobile */ }
@media (max-width: 480px)  { /* Mobile pequeño */ }
```

---

## 🧩 Componentes

### Header (`src/components/Header/`)

**Características:**
- Logo de LEAD UTP
- Navegación principal
- Botón de contacto
- Menú hamburguesa para móviles

**Archivos:**
- `Header.tsx` - Lógica y JSX
- `Header.css` - Estilos

**Props:** Ninguna (usa React Router)

### Footer (`src/components/Footer/`)

**Características:**
- Logo y tagline
- Redes sociales (Instagram, LinkedIn, Discord)
- Columnas de navegación

**Archivos:**
- `Footer.tsx` - Lógica y JSX
- `Footer.css` - Estilos

---

## 📄 Páginas

### Home (`src/pages/Home/`)

**Secciones:**
1. **Hero** - Título, subtítulo, botón CTA, imagen del equipo
2. **Alianzas** - Logos de organizaciones aliadas
3. **Pilares** - Carousel con los 6 pilares de LEAD

**Datos importantes:**
- `pilaresData` - Array con información de cada pilar
- `alianzasData` - Array con logos de aliados

### About (`src/pages/About/`)

**Secciones:**
1. **Hero** - Título de la página
2. **LEAD Meaning** - Significado del acrónimo
3. **Mission/Vision** - Cards de misión y visión
4. **Values** - Grid de valores

### Projects (`src/pages/Projects/`)

**Secciones:**
1. **Hero** - Título de la página
2. **Filters** - Botones de filtro por pilar
3. **Grid** - Tarjetas de proyectos

**Datos importantes:**
- `pilaresFilter` - Array con filtros de pilares
- `projectsData` - Array con proyectos (18 proyectos de ejemplo)

### Events (`src/pages/Events/`)

**Secciones:**
1. **Hero** - Título de la página
2. **Upcoming** - Eventos próximos
3. **Past** - Eventos pasados

**Datos importantes:**
- `upcomingEvents` - Array con eventos futuros
- `pastEvents` - Array con eventos pasados

---

## ➕ Agregar Nuevas Funcionalidades

### Crear Nueva Página

1. **Crear carpeta en `src/pages/`**
```
src/pages/NuevaPagina/
├── NuevaPagina.tsx
└── NuevaPagina.css
```

2. **Estructura básica del componente**
```tsx
import './NuevaPagina.css';

const NuevaPagina = () => {
  return (
    <main className="nueva-pagina">
      <section className="nueva-pagina-hero">
        {/* Contenido */}
      </section>
    </main>
  );
};

export default NuevaPagina;
```

3. **Agregar ruta en `App.tsx`**
```tsx
import NuevaPagina from './pages/NuevaPagina/NuevaPagina';

// En el Router
<Route path="/nueva-pagina" element={<NuevaPagina />} />
```

4. **Agregar link en Header**
```tsx
<Link to="/nueva-pagina" className="nav-link">Nueva Página</Link>
```

### Crear Nuevo Componente

1. **Crear carpeta en `src/components/`**
```
src/components/NuevoComponente/
├── NuevoComponente.tsx
└── NuevoComponente.css
```

2. **Estructura básica**
```tsx
import './NuevoComponente.css';

interface NuevoComponenteProps {
  title: string;
  // más props...
}

const NuevoComponente = ({ title }: NuevoComponenteProps) => {
  return (
    <div className="nuevo-componente">
      <h2>{title}</h2>
    </div>
  );
};

export default NuevoComponente;
```

### Agregar Nuevo Pilar

1. Actualizar `pilaresData` en `Home.tsx`
2. Agregar imagen en `public/images/pilares/`
3. Agregar color en `tokens.css`
4. Actualizar filtros en `Projects.tsx`

### Agregar Nuevo Proyecto

1. Agregar objeto en `projectsData` de `Projects.tsx`:
```tsx
{
  id: 19,
  title: 'Nombre del Proyecto',
  description: 'Descripción del proyecto...',
  pilar: 'id-del-pilar',
  image: '/images/pilares/imagen.png',
  gradientFrom: '#color1',
  gradientTo: '#color2'
}
```

### Agregar Nuevo Evento

1. Agregar objeto en `upcomingEvents` o `pastEvents` de `Events.tsx`:
```tsx
{
  id: 1,
  title: 'Nombre del Evento',
  description: 'Descripción...',
  date: '2025-01-15',
  time: '18:00',
  location: 'Lugar del evento',
  pilar: 'id-del-pilar',
  pilarColor: '#color'
}
```

---

## 🖼️ Imágenes y Assets

### Estructura de Carpetas

```
public/images/
├── alianzas/              # Logos de aliados (PNG)
│   ├── logo-dsc-utp.png
│   ├── logo-coneii.png
│   └── ...
├── backgrounds/           # Fondos y patrones
├── logos/                 # Logos de LEAD UTP
│   ├── lead-utp-logo-default.png
│   └── lead-utp-logo-light.png
├── pilares/               # Cards de pilares (PNG)
│   ├── desarrollo-profesional-card.png
│   ├── liderazgo-card.png
│   └── ...
└── hero-team.png          # Imagen del hero
```

### Convenciones de Nomenclatura

- **Logos**: `logo-nombre.png`
- **Cards de pilares**: `nombre-pilar-card.png`
- **Fondos**: `bg-nombre.png`
- Usar **kebab-case** (minúsculas con guiones)
- Formato preferido: **PNG** para transparencias, **JPG/JPEG** para fotos

### Tamaños Recomendados

| Tipo | Dimensiones | Uso |
|------|-------------|-----|
| Hero | 562×527px (o 2x para retina) | Imagen principal del home |
| Pilar Card | 336×388px | Cards del carousel |
| Logo Alianza | 100-150px de alto | Sección alianzas |
| Logo LEAD | 142×85px | Header |

---

## 🚀 Despliegue

### Build de Producción

```bash
# Generar build
npm run build

# Previsualizar
npm run preview
```

### Plataformas Recomendadas

1. **Vercel** (Recomendado)
   - Conectar repositorio de GitHub
   - Build automático en cada push
   - Preview deployments en PRs

2. **Netlify**
   - Similar a Vercel
   - Configuración simple

3. **GitHub Pages**
   - Gratuito
   - Requiere configuración adicional para SPA

### Variables de Entorno

Si se necesitan variables de entorno, crear `.env`:
```
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=UA-XXXXX
```

Acceso en código:
```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 🐛 Solución de Problemas Comunes

### El servidor no inicia
```bash
# Limpiar caché
rm -rf node_modules
npm install
npm run dev
```

### Los estilos no se aplican
- Verificar que el CSS esté importado en el componente
- Revisar nombres de clases
- Verificar tokens en `tokens.css`

### Las imágenes no cargan
- Verificar ruta (debe empezar con `/images/`)
- Verificar extensión del archivo
- Verificar que el archivo existe en `public/images/`

### Error de TypeScript
```bash
# Verificar tipos
npm run lint
```

---

## 📞 Soporte

Para dudas o problemas:
- Revisar Issues en el repositorio
- Contactar al equipo de desarrollo de LEAD UTP
- Discord de la comunidad LEAD

---

**Última actualización:** Diciembre 2025
