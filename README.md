# Proyecto Grupal

Una aplicación web moderna desarrollada con React y Vite 

## Tecnologías Utilizadas

- **React 19.1.0** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite 6.3.5** - Herramienta de construcción rápida para desarrollo frontend
- **Ant Design 5.25.4** - Biblioteca de componentes UI de alta calidad
- **ESLint** - Herramienta de análisis de código estático para identificar patrones problemáticos

## Instalación

### En tu terminal ejecuta los siguientes comandos

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd proyectogrupal
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`


## Contribución

Este es un proyecto grupal. Para contribuir:

1. Crea una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`
2. Realiza tus cambios y confirma: `git commit -m 'Agregar nueva funcionalidad'`
3. Sube tu rama: `git push origin feature/nueva-funcionalidad`
4. Abre un Pull Request

## Desarrollo

### Agregar Nuevos Componentes

1. Crea tu componente en la carpeta `src/components/`
2. Importa y usa el componente en `App.jsx` o donde sea necesario
3. Sigue las convenciones de nomenclatura existentes

### Estilos

- Los estilos globales van en `src/index.css`
- Los estilos específicos de componentes van en archivos `.css` junto al componente
- Se utiliza Ant Design para componentes UI estándar