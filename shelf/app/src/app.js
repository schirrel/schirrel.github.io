import { getResultado } from "./service/index.js"


const load = async () => {
    const ultimosXjogos = localStorage.getItem('ultimosXjogos')
    const tipoJogos = localStorage.getItem('tipoJogos')
    const resultado = await getResultado(tipoJogos, ultimosXjogos)
    const event = new CustomEvent('ResultadoEvent', { detail: resultado });
    document.dispatchEvent(event);


}

document.addEventListener('SearchEvent', (event) => {
    load()
})