export default class Card {
    getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    obtenerDatos = async (id) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }
  }
  