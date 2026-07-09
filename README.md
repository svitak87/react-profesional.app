# Proyecto React

Aplicación web desarrollada con **React** y **Vite**. Este documento explica cómo instalar las dependencias, ejecutar el proyecto en entorno local y generar una versión para producción.

---

## 🚀 Tecnologías utilizadas

- React
- Vite
- JavaScript / JSX
- CSS3
- Node.js
- npm

---

## 📋 Requisitos previos

Antes de comenzar, debes tener instalado:

- **Node.js** (versión recomendada: LTS)
- **npm** (incluido con Node.js)
- Git (opcional, si clonas el repositorio)

Puedes comprobar las versiones instaladas con:

```bash
node -v
```

```bash
npm -v
```

---

## 📥 Instalación del proyecto

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

Ejemplo:

```bash
git clone https://github.com/usuario/nombre-del-proyecto.git
```

---

### 2. Acceder a la carpeta del proyecto

```bash
cd nombre-del-proyecto
```

---

### 3. Instalar dependencias

Ejecuta:

```bash
npm install
```

Este comando instala todas las librerías necesarias definidas en el archivo `package.json`.

---

## ▶️ Ejecutar el proyecto en desarrollo

Para iniciar el servidor local:

```bash
npm run dev
```

Vite mostrará una dirección similar a:

```text
Local: http://localhost:5173/
```

Abre esa URL en el navegador.

---

## 🏗️ Crear versión para producción

Para generar los archivos optimizados:

```bash
npm run build
```

Esto creará una carpeta:

```text
dist/
```

con la versión lista para desplegar.

---

## 👀 Previsualizar la versión de producción

Después de ejecutar `npm run build`:

```bash
npm run preview
```

---

## 📁 Estructura básica del proyecto

```text
nombre-del-proyecto/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠️ Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm install` | Instala las dependencias |
| `npm run dev` | Ejecuta el proyecto en desarrollo |
| `npm run build` | Genera la versión de producción |
| `npm run preview` | Previsualiza la versión compilada |

---

## 🐛 Solución de problemas comunes

### Error: npm no funciona en PowerShell

Si aparece:

```text
execution of scripts is disabled on this system
```

Ejecuta PowerShell como administrador:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Luego reinicia VS Code.

---

### Puerto ocupado

Si Vite indica que el puerto está ocupado:

```bash
npm run dev -- --port 3000
```

---

## 👨‍💻 Autor

Desarrollado por **Óscar**.