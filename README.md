# Cypress Automation

Framework de automatización de pruebas end-to-end y API con Cypress y TypeScript.

## Reporte de Pruebas

Ver reporte en GitHub Pages: https://juanfranciscobumo.github.io/cypress-automation/

## Requisitos previos

- Node.js >= 18
- npm o yarn

## Instalación

```bash
npm install
```

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run cypress:open` | Abre la UI de Cypress |
| `npm run cypress:run` | Ejecuta tests en modo headless |
| `npm run cypress:run:headless` | Ejecuta tests en Chrome headless |
| `npm run cypress:run:api` | Ejecuta solo tests de API |

## Estructura del proyecto

```
cypress/
├── e2e/
│   └── api/              # Tests de API
│       ├── posts.cy.ts
│       ├── users.cy.ts
│       └── comments.cy.ts
├── fixtures/             # Datos de prueba
│   ├── users.json
│   ├── posts.json
│   └── apiEndpoints.json
├── support/
│   ├── commands.ts       # Custom commands
│   └── e2e.ts
└── types/
    └── index.d.ts        # Definiciones de tipos
```

## Custom Commands disponibles

### API
- `cy.apiGet<T>(endpoint)` - Petición GET
- `cy.apiPost<T>(endpoint, body)` - Petición POST
- `cy.apiPut<T>(endpoint, body)` - Petición PUT
- `cy.apiDelete<T>(endpoint)` - Petición DELETE

### Autenticación
- `cy.login(username, password)` - Login con sesión

### Fixtures
- `cy.getFixture<T>(fixtureName)` - Obtener datos de fixtures

## Ejemplo de uso

```typescript
// Test de API
cy.apiGet<Post[]>("/posts").then((response) => {
  expect(response.status).to.eq(200);
  expect(response.body).to.be.an("array");
});

// Crear post
cy.apiPost<Post>("/posts", {
  title: "Nuevo Post",
  body: "Contenido",
  userId: 1
});
```

## API Under Test

Se utiliza [JSONPlaceholder](https://jsonplaceholder.typicode.com) como API de prueba.

### Base URL
```
https://jsonplaceholder.typicode.com
```

### Endpoints disponibles

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/posts` | Obtener todos los posts |
| GET | `/posts/:id` | Obtener un post por ID |
| GET | `/posts?userId=:id` | Obtener posts por usuario |
| POST | `/posts` | Crear un nuevo post |
| PUT | `/posts/:id` | Actualizar un post |
| DELETE | `/posts/:id` | Eliminar un post |
| GET | `/users` | Obtener todos los usuarios |
| GET | `/users/:id` | Obtener un usuario por ID |
| GET | `/users/:id/posts` | Obtener posts de un usuario |
| GET | `/comments` | Obtener todos los comentarios |
| GET | `/comments?postId=:id` | Obtener comentarios por post |
| GET | `/albums` | Obtener todos los álbumes |
| GET | `/todos` | Obtener todas las tareas |

### Headers requeridos
```json
{
  "Content-Type": "application/json"
}
```

## Configuración

La configuración principal se encuentra en `cypress.config.ts`:

- **baseUrl**: https://jsonplaceholder.typicode.com
- **viewport**: 1280x720
- **Spec pattern**: `cypress/e2e/**/*.cy.ts`

## Tecnologías

- Cypress 13
- TypeScript 5
