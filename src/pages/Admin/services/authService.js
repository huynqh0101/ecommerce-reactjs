export const login = async (email, password) => {
    try {
        const response = await fetch('https://example.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Failed to login');
        }

        return await response.json();
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, message: error.message };
    }
};