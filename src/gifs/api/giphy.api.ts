import axios from 'axios'

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1',
    params: {
        lan: 'es',
        api_key: import.meta.env.VITE_GIPHY_API_KEY
    }
})