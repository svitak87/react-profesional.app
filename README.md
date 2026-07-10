# Buscador de Personajes - Rick and Morty

## 📋 Descripción

Este proyecto consiste en una aplicación desarrollada con **React** que permite buscar personajes de la serie **Rick and Morty** consumiendo una API REST pública.

El objetivo principal fue implementar un **Custom Hook (`useFetch`)** que encapsule toda la lógica relacionada con la obtención de datos, el manejo de estados, la implementación de una caché en memoria y la optimización de las peticiones HTTP.

---

## 🚀 Tecnologías utilizadas

- React
- JavaScript (ES6+)
- Fetch API
- CSS
- Hooks

---

## 🌐 API consumida

La aplicación consume la **Rick and Morty API**, una API REST pública que proporciona información sobre personajes, episodios y ubicaciones de la serie.

**Documentación oficial**

https://rickandmortyapi.com/documentation

**Endpoint utilizado**

```http
GET https://rickandmortyapi.com/api/character?name={nombre}
```

**Ejemplo**

```http
GET https://rickandmortyapi.com/api/character?name=rick
```

La respuesta contiene información del personaje junto con datos de paginación.

---

## ⚙️ Funcionalidades implementadas

- Buscar personajes por nombre.
- Consumo de una API REST mediante `fetch`.
- Spinner durante la carga de datos.
- Manejo de errores.
- Búsqueda optimizada mediante **Debounce**.
- Implementación de una **caché en memoria**.
- Botón para recargar información (`refetch`).
- Cancelación de peticiones con `AbortController`.

---

# Custom Hook `useFetch`

El hook `useFetch` concentra toda la lógica relacionada con las peticiones HTTP.

Es responsable de:

- realizar la petición a la API
- almacenar los datos obtenidos
- controlar el estado de carga (`isLoading`)
- manejar errores
- utilizar una caché para evitar consultas repetidas
- permitir recargar los datos manualmente

De esta manera, el componente únicamente se encarga del renderizado de la interfaz.

---

# Implementación de la caché

Para evitar realizar múltiples peticiones a la misma URL, se implementó una caché utilizando un objeto definido fuera del hook.

```javascript
const cache = {};
```

Al estar declarado fuera del hook, este objeto permanece en memoria durante toda la ejecución de la aplicación.

Cada URL consultada se utiliza como clave del objeto.

```javascript
cache[url] = data;
```

Ejemplo:

```javascript
{
  "https://rickandmortyapi.com/api/character?name=rick": { ... },
  "https://rickandmortyapi.com/api/character?name=morty": { ... }
}
```

Cada vez que el hook recibe una URL nueva, primero verifica si esa información ya fue consultada.

```javascript
if (cache[url]) {
    setState({
        data: cache[url],
        isLoading: false,
        error: null
    });

    return;
}
```

### Si la información ya existe

- No se realiza una nueva petición HTTP.
- Los datos se obtienen directamente desde la memoria.
- La respuesta es prácticamente inmediata.
- Se reduce el tráfico hacia la API.

### Si la información no existe

1. Se realiza la petición HTTP.
2. Se obtiene la respuesta.
3. La respuesta se guarda en la caché.
4. Se actualiza el estado del hook.

Este mecanismo evita consultas duplicadas durante la misma sesión.

---

# Refetch

Además de utilizar la caché, se implementó un botón **Recargar**.

Su objetivo es forzar una nueva consulta a la API.

Su funcionamiento es el siguiente:

1. Elimina la información almacenada para la URL actual.
2. Realiza una nueva petición HTTP.
3. Guarda nuevamente la respuesta en la caché.

Esto permite actualizar la información cuando sea necesario.

---

# Debounce

Se implementó un hook personalizado llamado `useDebounce`.

Su función consiste en esperar **500 milisegundos** después de que el usuario deja de escribir antes de realizar una búsqueda.

Esto evita realizar una petición por cada tecla presionada.

Beneficios:

- Reduce el número de consultas.
- Mejora el rendimiento.
- Disminuye el consumo de la API.
- Mejora la experiencia del usuario.

---

# Manejo de estados

El hook administra tres estados principales.

### Loading

Mientras la petición está en curso se muestra un componente `Spinner`.

### Success

Cuando la petición finaliza correctamente se muestran los personajes encontrados.

### Error

Si ocurre algún error, como por ejemplo buscar un personaje inexistente, se muestra un mensaje informativo al usuario.

Cuando el usuario limpia completamente el campo de búsqueda, el hook limpia automáticamente el estado, eliminando tanto los resultados como el mensaje de error.

---

# Cancelación de peticiones

Se implementó `AbortController` para cancelar automáticamente una petición cuando:

- el componente se desmonta
- la URL cambia antes de finalizar la consulta

Esto evita advertencias de React relacionadas con actualizaciones de componentes desmontados.

---

# Estructura del proyecto

```
src
│
├── components
│   ├── SearchBoard.jsx
│   └── Spinner.jsx
│
├── hooks
│   ├── useFetch.js
│   └── useDebounce.js
│
└── App.jsx
```

---

# Conceptos practicados

- React Hooks
- Custom Hooks
- useState
- useEffect
- useCallback
- Fetch API
- Debounce
- Caché en memoria
- AbortController
- Renderizado condicional
- Manejo de errores
- Optimización de peticiones HTTP

---

# Instalación

Clonar el repositorio

```bash
git clone <url-del-repositorio>
```

Instalar dependencias

```bash
npm install
```

Ejecutar el proyecto

```bash
npm run dev
```

---

# Resultado

Este proyecto demuestra cómo construir un **Custom Hook reutilizable** capaz de gestionar completamente el consumo de una API REST, incorporando técnicas habituales en aplicaciones React modernas como el manejo de estados, caché en memoria, debounce, cancelación de peticiones y recarga manual de datos.

Desarrollado por **Óscar**.