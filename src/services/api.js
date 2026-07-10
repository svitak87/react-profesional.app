
export const getUsers = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');

        if (!response.ok) {
            throw new Error(`Error al obtener los usuarios. status code: ${response.status}: ${response.statusText}`);
            return;
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.error(error);
        throw new Error(`Hubo un error global en la petición, ${error.message}`);
    }
}

export const createUser = async (userData) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`Error al crear el usuario. status code: ${response.status}: ${response.statusText}`);
            return;
        }

        return await response.json();
    } catch (error) {
        console.error(error.message);
        throw new Error(`Hubo un error global en la petición, ${error.message}`);
    }
}

const cache = {}; // Nuestra memoria simple: { [url]: data }
