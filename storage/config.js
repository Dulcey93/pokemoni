import Card from "../components/myCard.js";
// Importa el módulo de Worker y
// Crea una nueva instancia de Worker.

export default {
    render() {
        const worker = new Worker('storage/wsMyCard.js', {type: 'module'});

        const ins =  new Card();
        const id =  ins.getRandomInt(1, 151);
        const datos = ins.obtenerDatos(id);
        datos.then(pokemon => worker.postMessage(pokemon));
        worker.addEventListener('message', r => {
            let template = r.data
            document.querySelector('#contenedor-pokemon').insertAdjacentHTML('beforeend', template)
        })
    }
}
