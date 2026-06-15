import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (
    username: string,
    password: string
) => {

    const response = await axios.post(
    `${API_URL}/api/auth/login`,
    {
        username,
        password
    }
    );

    return response.data;
};
