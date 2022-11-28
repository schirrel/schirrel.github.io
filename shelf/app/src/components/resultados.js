class Resultados extends HTMLElement {

    render(data) {
        this.section = document.createElement("section");
        if (typeof data === 'string') {
            this.section.innerHTML = data
        }
        else if (data) {
            this.section.innerHTML = `
            <table>
            <thead>
            <tr>
            <th> Sorteio </th>
            <th> Números </th>
            </tr>
            </thead>
            <tbody>
            ${data.map(each => {
                return `
                <tr>
                <td>${each.numero}</td>
                <td>
                 ${each.listaDezenas.map(number => `<span> ${number} </span>`).join("")}
                 </td>
                 </tr>
                 `
            }).join("")}
            </tbody>
            </table>`
        }
        this.shadow.innerHTML = "";
        this.shadow.appendChild(this.section);
    }
    constructor() {
        super();
        const sheet = new CSSStyleSheet();
        this.shadow = this.attachShadow({ mode: "open" });
        this.shadow.adoptedStyleSheets = [sheet];
        this.render();

        document.addEventListener('ResultadoEvent', (event) => {
            this.render(event.detail)
        })

        document.addEventListener('SearchEvent', (event) => {
            this.render("carregando");
        })
    }
}
// Register the Custom Element:
window.customElements.define("lot-resultado", Resultados);