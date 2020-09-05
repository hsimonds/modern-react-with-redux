import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID XNT-5jvabMs8eJqNoKT1HCVRoAyOAOsls-G0MelM6bU'
    }
});