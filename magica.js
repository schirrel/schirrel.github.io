import Dictionary from './scripts/translation.js';
import Menu from './scripts/menu.js';
import Content from './scripts/content.js';
Dictionary.init();
Menu.init();
Content.init(Menu.itens);
