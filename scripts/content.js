
const validateDataSection = () => {
    let toShow = document.body.getAttribute('data-section')
    if (toShow) {
        setTimeout(() => {
            document.body.classList.add("has-selected-section");
        },300)
    } else {
        document.body.classList.remove("has-selected-section");
    }
}

const addHandler = (menuItens) => {
    menuItens.forEach(item => {
        item.listners.click.push(validateDataSection)
    });
}

const Content = {
    init: addHandler
}

export default Content