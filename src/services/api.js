const API = 'https://economia.awesomeapi.com.br/json/all';

const getAPI = () => fetch(API)
  .then((response) => response.json())
  .then((data) => (data))
  .catch((error) => (error));

export default getAPI;
