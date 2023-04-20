// Lo que se está exportando es un objeto con una función que recibe un parámetro que se ingresa en el postMessage, que es el que se recibe en el Worker.
export let wsmyCards = {
    render_data_cards(pokemon){
        let template = /*html*/
        `
        <div class="card">
        <img src="./images/bg-pattern-card.svg" alt="imagen header card" class="card-header" />
        <div class="card-body">
          <img src=${pokemon.sprites.back_default} alt="imagen de vitoko" class="card-body-img" />
          <h1 class="card-body-title">
            ${pokemon.name} hp 
            <span>${pokemon.stats[0].base_stat} hp</span>
          </h1>
          <p class="card-body-text">${pokemon.base_experience} exp</p>
        </div>
        <div class="card-footer">
          <div class="card-footer-social">
            <h3>${pokemon.stats[1].base_stat}K</h3>
            <p>Ataque</p>
          </div>
          <div class="card-footer-social">
            <h3>${pokemon.stats[3].base_stat}K</h3>
            <p>Ataque especial</p>
          </div>
          <div class="card-footer-social">
            <h3>${pokemon.stats[2].base_stat}K</h3>
            <p>Defensa</p>
          </div>
        </div>
      </div>`
        return template;
    }
}

// Escucha los mensajes que recibe el Worker.
self.addEventListener('message', (e)=> {
    postMessage(wsmyCards.render_data_cards(e.data));
});
