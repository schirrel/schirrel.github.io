import Blog from './blog.js';
let menuItens = null;

const validateDataSection = () => {
    Array.from(document.querySelectorAll('section')).forEach(section=> section.classList.remove('active'))
    let toShow = document.body.getAttribute('data-section')
    if (toShow) {
        setTimeout(() => {
            document.body.setAttribute('data-section-active', true)
        }, 300)
        
        document.querySelector(`#${toShow}`).classList.add('active');

        if (toShow === 'blog') {
            Blog.init();
    }
    } else {
        document.body.removeAttribute('data-section-active')
    }
}

const addHandler = (menuItens) => {
    menuItens.forEach(item => {
        item.listners.click.push(validateDataSection)
    });
}

const validateLocation = () => {
    let currentPath = window.location.hash;
    if (currentPath.indexOf('#blog' == 0)) {
        menuItens[3].element.click();
        let hasSelected = currentPath.split('?');
        if(hasSelected.length===2)
        Blog.init(hasSelected[1]);
    }
}
const contentManager = (menus) => {
    menuItens = menus;
    addHandler(menus);
    validateLocation();
}

const Content = {
    init: contentManager
}

export default Content