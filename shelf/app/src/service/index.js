const api = "https://glowing-succulent-whippet.glitch.me"

export const getResultado = async (tipo = "lotofacil", concurso = "") => {

    try {
        const result = await fetch(`${api}?jogo=${tipo}&qtd=${concurso}`)
        const response = await result.json()
        return response
    } catch (err) {
        return {}
    }
}
