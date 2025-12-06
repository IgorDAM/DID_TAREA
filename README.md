# DID_TAREA

## Resumen de Características

Este proyecto es una aplicación web desarrollada con React y Vite que incluye:

- Interfaz de usuario construida con React 18
- Sistema de estilos con Tailwind CSS
- Hot Module Replacement (HMR) para desarrollo rápido
- Configuración de linting con ESLint y Stylelint
- Build optimizado para producción con Vite

## Dependencias Requeridas

### Requisitos del Sistema
- Node.js (versión 18 o superior)
- npm o yarn

### Dependencias del Proyecto

**Producción:**
- react: ^18.x
- react-dom: ^18.x

**Desarrollo:**
- vite: ^6.x
- @vitejs/plugin-react
- tailwindcss: ^3.x
- postcss: ^8.x
- autoprefixer: ^10.x
- eslint: ^9.x
- stylelint: ^16.x

## Cómo Ejecutar la Aplicación

### 1. Clonar el repositorio e instalar dependencias

```bash
git clone https://github.com/IgorDAM/DID_TAREA.git
cd DID_TAREA
npm install
```

### 2. Ejecutar en modo desarrollo

```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`

### 3. Compilar para producción

```bash
npm run build
```

Los archivos compilados se generarán en el directorio `dist/`

### 4. Previsualizar build de producción

```bash
npm run preview
```