const menuItens = Array.from(document.querySelectorAll("aside nav a")).map(
  menu => {
    return {
      element: menu,
      listners: {
        click: []
      }
    };
  }
);

const addClickListner = event => {
  menuItens.forEach(item => (item.className = ""));
  event.target.className = "active";
  let dataSection = event.target.getAttribute("data-section");
  if (dataSection) {
    document.body.setAttribute("data-section", dataSection);
  } else {
    document.body.removeAttribute("data-section");
  }
};

const callListners = item => {
  if (item.listners && item.listners.click) {
    item.element.onclick = evt => {
      item.listners.click.forEach(listner => {
        listner(evt);
      });
    };
  }
};

// [...document.querySelectorAll('aside nav a')].forEach()

const Menu = {
  init: () => {
    menuItens.forEach(item => {
      item.listners.click.push(addClickListner);
      callListners(item);
    });
  },
  itens: menuItens
};

export default Menu;
