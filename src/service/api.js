import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://digimoncard.io/api-public/'
})