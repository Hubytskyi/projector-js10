import { API_URL } from './config.js';

export async function fetchUsers() {
    const response = await fetch(`${API_URL}/users`);

    return response.json();
}