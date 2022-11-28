class Combinator extends HTMLElement {
    getPercentage(value) {
        const ultimosXjogos = localStorage.getItem('ultimosXjogos')

        return Number((value * 100) / ultimosXjogos).toFixed(2)
    }
    render(data) {
        this.section = document.createElement("section");
        if (typeof data === 'string') {
            this.section.innerHTML = data
        }
        else if (data) {
            this.section.innerHTML = `
            <h2> Combinações mais sorteados: </h2>
           <ul style="list-style: decimal;"> ${data.map(each => {
                return `<li>${each.combination} - ${each.percentage}% dos jogos(${each.count} vezes)</li>`
            }).join("\n")}
            </ul>`
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
            this.render(event.detail.combinations)

        })
        document.addEventListener('SearchEvent', (event) => {
            this.render("carregando");
        })
    }
}
// Register the Custom Element:
window.customElements.define("lot-combinator", Combinator);