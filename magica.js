const menuItens = Array.from(document.querySelectorAll('aside nav a'));

const handleMenuClick = (event) => {
    menuItens.forEach(item => item.className = "");
    event.target.className = 'active';
}



// [...document.querySelectorAll('aside nav a')].forEach()
menuItens.forEach((item) => {
    item.onclick = handleMenuClick;
})


// document.addEventListener('scroll', () => {
//     document.body.classList.toggle('scrolling')
// })