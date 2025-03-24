# Laboratorio React - GitHub & Star Wars API

Este proyecto es una aplicación web desarrollada con React que proporciona una interfaz para interactuar con la API de GitHub y la API de Star Wars (en desarrollo).

## 🚀 Características

- Búsqueda de organizaciones en GitHub
- Visualización de miembros de una organización
- Paginación de resultados
- Detalles de miembros individuales
- Interfaz moderna con Material-UI y Tailwind CSS
- Soporte completo para TypeScript
- Diseño responsive

## 🛠️ Tecnologías Utilizadas

- React 18
- TypeScript
- Vite
- Material-UI
- Tailwind CSS
- React Router DOM
- Axios
- React Hook Form

## 📋 Prerrequisitos

- Node.js (versión 16 o superior)
- pnpm (recomendado) o npm

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone [url-del-repositorio]
```

2. Instalar dependencias:
```bash
pnpm install
```

3. Iniciar el servidor de desarrollo:
```bash
pnpm dev
```

## 📁 Estructura del Proyecto

```
src/
├── common/         # Componentes y utilidades compartidas
├── core/           # Configuración central (rutas, contextos)
├── layouts/        # Layouts de la aplicación
└── pods/          # Módulos/características principales
    ├── github-list/    # Lista de miembros de GitHub
    ├── github-detail/  # Detalles de miembro
    └── home-page/      # Página principal
```

## 🔍 Uso

1. Accede a la aplicación en `http://localhost:5173`
2. En la página principal, selecciona "GitHub API"
3. Ingresa el nombre de una organización de GitHub
4. Explora los miembros y sus detalles

## 🧪 Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo
- `pnpm build`: Construye la aplicación para producción
- `pnpm lint`: Ejecuta el linter
- `pnpm preview`: Previsualiza la versión de producción

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, asegúrate de:

1. Hacer fork del proyecto
2. Crear una rama para tu característica
3. Hacer commit de tus cambios
4. Crear un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## ✨ Próximas Mejoras

- [ ] Implementación de la API de Star Wars
- [ ] Pruebas unitarias y de integración
- [ ] Mejoras en la accesibilidad
- [ ] Sistema de caché para peticiones
- [ ] Lazy loading de componentes
