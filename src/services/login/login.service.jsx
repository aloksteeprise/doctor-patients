
//Get auth API path
import { Login_Auth_API } from '../../constants/apiConstants';

export const loginAuthService = async (email, password) => {
    try {
        const response = await fetch(Login_Auth_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();

        // Save the token (or other relevant data) to local storage or state management
        localStorage.setItem('token', data.token);

        return data;

    }
    catch (error) {
        console.error('Login error:', error);
        
        throw error;
    }
};
