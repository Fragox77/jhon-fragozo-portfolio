# Minifolio

Repositorio del sitio de Jhon Fragozo.

El proyecto actual vive en Next.js (carpeta `app-next`) y se publica en GitHub Pages como export estático.

## Estado del proyecto

- Actual (productivo): `app-next/`
- Legado (archivado, no eliminado): `legacy-site/`

El contenido legacy se conserva por respaldo y referencia mientras se cierra totalmente la migración.

## Qué vive en `app-next`

`app-next` es la aplicación activa en Next.js + React + TypeScript + Tailwind.

Incluye:

- Rutas y páginas del sitio actual (`app/`)
- Componentes UI y layout (`components/`)
- Contenido y constantes (`lib/content`, `lib/constants`)
- Lógica del cotizador y validaciones (`lib/pricing`, `lib/validation`)
- Utilidades de almacenamiento local y WhatsApp (`lib/storage`, `lib/whatsapp`)

Scripts principales (`app-next/package.json`):

- `npm run dev`: desarrollo local
- `npm run dev:reset`: limpia `.next` y levanta dev
- `npm run lint`: chequeo TypeScript (`tsc --noEmit`)
- `npm run build`: build y export estático

## Cómo levantar local

Desde la raíz del repo:

```powershell
Set-Location "c:\Users\Jhon Fragozo\Documents\FREELANCE 2026\04 Jhon Fragozo\Portafolio Freelance\buyer-file\minifolio\app-next"
npm install
npm run dev
```

Abrir:

- `http://localhost:3000`
- Si 3000 está ocupado, Next usa otro puerto (por ejemplo 3001)

Si hay errores por caché de compilación:

```powershell
npm run dev:reset
```

## Cómo funciona el deploy a GitHub Pages

El deploy es automático con GitHub Actions mediante el workflow:

- `.github/workflows/deploy-pages.yml`

Flujo:

1. Push a `main`
2. Action instala dependencias en `app-next`
3. Ejecuta `npm run build`
4. Publica `app-next/out` en GitHub Pages

Detalles técnicos:

- `next.config.ts` usa `output: "export"`
- En producción aplica `basePath` y `assetPrefix` (default `/minifolio`)
- Se crea `.nojekyll` para compatibilidad con assets `_next`

URL pública:

- https://comunicaciones2-star.github.io/minifolio/

## Qué es legado y qué es actual

Actual:

- `app-next/` (única base activa para desarrollo y deploy)

Legado:

- `legacy-site/` contiene el antiguo sitio estático (`index.html`, `about.html`, `assets/`, `contact.php`, etc.)
- No se borra todavía por decisión de continuidad y respaldo
- No debe usarse para nuevas funcionalidades

## Qué rama usar para trabajo

Rama de integración y despliegue:

- `main`

Recomendación de trabajo diario:

1. Crear rama de trabajo desde `main` (`feat/...`, `fix/...`, `chore/...`)
2. Abrir PR hacia `main`
3. Al mergear en `main`, se dispara deploy a Pages

Si trabajas directo y solo en este repo, también puedes hacer commits en `main`, pero cualquier push disparará publicación.

## Comandos útiles

```powershell
# Estado del repo
git status

# Verificar tipos
npm run lint

# Validar build de producción antes de subir
npm run build
```

## Enlaces

- Repo: https://github.com/comunicaciones2-star/minifolio
- Actions: https://github.com/comunicaciones2-star/minifolio/actions
- Sitio: https://comunicaciones2-star.github.io/minifolio/
