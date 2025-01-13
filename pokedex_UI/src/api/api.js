import axios from 'axios'

const instancePoke = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
  });

export {instancePoke}