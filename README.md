# Digital Bank - Fintech Web Application

## URL del Deploy

https://digital-bank-2yr182lt9-johnnielcs-projects.vercel.app/

## Descripción del Proyecto

Este proyecto es una aplicación web de banca digital (fintech) que ofrece productos financieros simulados. Los usuarios pueden navegar por los productos, ver sus detalles y obtener información relevante sobre ellos. La interfaz está diseñada para ser moderna, confiable y mobile-first, utilizando tecnologías de vanguardia para garantizar una experiencia de usuario eficiente y accesible.

### Funcionalidades principales:

- Vista de productos financieros con filtros por categoría.
- Vista detallada de cada producto, con información relevante como tasa de interés, riesgo, categoría y rendimiento histórico.
- Navegación y filtros fáciles de usar para mejorar la experiencia del usuario.

## Tecnologías Usadas

- **Frontend**:
  - **React**: Framework de JavaScript para construir interfaces de usuario interactivas.
  - **TypeScript**: Superset de JavaScript que agrega tipado estático.
  - **Tailwind CSS**: Framework CSS para un diseño rápido y flexible basado en clases utilitarias.
  - **Recharts**: Biblioteca para gráficos interactivos.
- **Arquitectura**:

  - **Clean Architecture**: Una estructura que facilita el mantenimiento y escalabilidad del código, separando la lógica de negocio, la infraestructura y la presentación.

## Estructura del Proyecto

```bash
src/
.
├── app/                        # Carpeta que contiene las rutas y páginas de Next.js
│   ├── [id]/                   # Carpeta que maneja la página de detalles del producto, donde [id] es dinámico
│   │   └── page.tsx            # Página que muestra los detalles de un producto específico (usando un parámetro dinámico en la URL)
│   ├── layout.tsx              # Layout global de la aplicación, con la estructura común (cabecera, etc.)
│   └── page.tsx                # Página principal (Home Page), donde se listan los productos financieros
│
├── domain/                     # Lógica de negocio y dominio de la aplicación
│   ├── entities/               # Definición de las entidades del dominio, como productos
│   │   └── product.ts          # Entidad del producto, con propiedades y lógica relevante
│   ├── enums/                  # Enumeraciones para valores constantes, como las categorías de los productos
│   │   └── ProductCategory.ts  # Enumeración de las categorías de los productos financieros
│   └── usecases/               # Casos de uso de la aplicación, interactuando con los repositorios
│       └── GetAllProducts.ts   # Caso de uso que obtiene todos los productos desde el repositorio
├── infrastructure/             # Implementación de la infraestructura de la aplicación, como repositorios y fuentes de datos
│   └── ProductMockRepository.ts # Repositorio que simula la obtención de productos (mock data)
├── presentation/               # Lógica de presentación, como hooks y componentes específicos de la interfaz
│   └── hooks/                  # Hooks personalizados para manejar lógica de datos o interacción con el frontend
│       └── useProducts.ts      # Hook que obtiene los productos (usando el caso de uso GetAllProducts)
│   ├── components/             # Componentes de presentación específicos para la interfaz de usuario
│
│   ├── HOCs/                   # Higher-Order Components (HOC) para lógica reutilizable
│       └── withLoading.tsx     # HOC que maneja el estado de carga y errores
├── repositories/               # Lógica de acceso a los datos, incluyendo interfaces y repositorios para interactuar con las fuentes de datos
│   └── ProductRepository.ts/   # Repositorio que maneja la interacción con los datos del producto (ej. API, base de datos, mock)
└── styles/                     # Carpeta para los estilos globales de la aplicación
    └── globals.css             # Archivo CSS global con los estilos básicos y generales

```

## Instalación y Configuración

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://npmjs.com)

### Instrucciones para la instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/digital-bank.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd digital-bank
   ```
3. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre el navegador y accede a http://localhost:3000.

## Respuestas a las Preguntas

### 1. ¿Qué criterios seguiste para diseñar la UI de productos financieros?

Para diseñar la UI de productos financieros, me enfoqué en los siguientes criterios:

- **Claridad**: El diseño debe ser claro y fácil de entender para que los usuarios puedan acceder a la información esencial sobre cada producto de forma rápida.
- **Accesibilidad**: Usé principios de diseño accesible, como contraste adecuado y navegación clara, para garantizar que todos los usuarios, incluidos los que tienen discapacidades, puedan interactuar con la aplicación.
- **Mobile-First**: Debido a que muchos usuarios accederán a la plataforma desde dispositivos móviles, la interfaz está diseñada para funcionar bien en pantallas pequeñas primero y luego adaptarse a pantallas más grandes.
- **Confianza y Profesionalismo**: Como se trata de una aplicación fintech, la apariencia de la interfaz debe transmitir confianza. Usé colores como el azul y tonos neutros para reflejar la seriedad y seguridad de los servicios financieros.

### 2. ¿Cómo decidiste cuándo usar Tailwind y cuándo Styled Components?

- **Tailwind CSS** se utilizó principalmente para la estructura y disposición de los elementos (layout). Dado que es un framework basado en clases utilitarias, se adapta muy bien para diseñar rápidamente las estructuras de las páginas (como grids, márgenes, paddings, etc.) sin necesidad de escribir CSS personalizado.
- **Styled Components** se usó para los componentes visuales más complejos y reutilizables. En estos casos, cuando se requiere un estilo más específico para un componente o cuando necesitamos hacer uso de props para personalizar los estilos, Styled Components es más adecuado, ya que permite encapsular el CSS dentro del componente de manera dinámica.

### 3. ¿Qué harías para escalar este proyecto en una aplicación real de banca digital?

Para escalar este proyecto a una aplicación de banca digital real, consideraría los siguientes puntos:

- **Seguridad**: Implementar medidas de seguridad robustas como autenticación de múltiples factores (MFA), cifrado de datos sensibles y auditoría de seguridad.
- **Optimización de la API**: Implementar una capa de caché para mejorar el rendimiento y reducir la carga en el servidor. También se usarían APIs REST o GraphQL para una mejor gestión de las solicitudes.
- **Testing y CI/CD**: Integrar pruebas automatizadas, integración continua y despliegue continuo (CI/CD) para garantizar que el sistema sea robusto y pueda escalar sin problemas.

### 4. ¿Qué herramientas usarías para mejorar el rendimiento y monitoreo en producción?

- **Optimización en el lado del cliente**: Usar herramientas como **React.memo**, **Lazy Loading** y **Code Splitting** para reducir el tamaño del paquete y mejorar el rendimiento en la carga inicial.
- **Monitoreo de rendimiento**: Implementar herramientas como **Google Lighthouse** para analizar el rendimiento de la aplicación en producción y optimizar las áreas que lo necesiten.
- **Monitoreo y Logs**: Utilizar herramientas de monitoreo como **Sentry** o **Datadog** para supervisar errores, alertas y rendimiento en tiempo real.
- **Análisis de tráfico**: Implementar herramientas como **Google Analytics** o **Mixpanel** para obtener información sobre el comportamiento del usuario y tomar decisiones informadas sobre mejoras en la UI/UX.
- **CDN y optimización de imágenes**: Usar una Red de Distribución de Contenido (CDN) y optimizar imágenes con herramientas como **Cloudinary** para mejorar los tiempos de carga y la experiencia del usuario.
