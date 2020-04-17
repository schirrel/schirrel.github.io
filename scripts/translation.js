import Request from './Request.js';
const languagesElement = document.querySelector("#languages");

const getDictionary = async () => {
  let dict = await Request.get("./assets/dicionario.json");
  return dict;
};

export const currentLanguage = () => window.localStorage.getItem("schirrel-language") || 'ptBr';

const renderLanguage = (key, language) => {
  let newLanguage = document.createElement("li");
  newLanguage.setAttribute("data-translation", key);
  newLanguage.innerText = key; //language.name;
  languagesElement.appendChild(newLanguage);
};

const changeLanguage = language => {
  let toTranslate = document.querySelectorAll("[data-i18n]");

  let selected = window.dictionary.languages[language];
  for (let t = 0; t < toTranslate.length; t++) {
    toTranslate[t].innerText =
      selected.dictionary[toTranslate[t].getAttribute("data-i18n")];
    if (toTranslate[t].hasAttribute("data-text")) {
      toTranslate[t].setAttribute(
        "data-text",
        selected.dictionary[toTranslate[t].getAttribute("data-i18n")]
      );
    }
  }

  window.localStorage.setItem("schirrel-language", language);
};

const renderDictionary = dictionary => {
  for (var l in dictionary.languages) {
    renderLanguage(l, dictionary.languages[l]);
  }

  let languages = document.querySelectorAll("[data-translation]");

  for (let i = 0; i < languages.length; i++) {
    languages[i].onclick = evt => {
      if (evt.target && evt.target.getAttribute("data-translation")) {
        let language = (window.language = evt.target.getAttribute(
          "data-translation"
        ));
        changeLanguage(language);
      }
    };
  }
};
const Dictionary = {
  init: async () => {
    let dictionary = await getDictionary();
    if (dictionary && dictionary.languages) {
      window.dictionary = dictionary;
      renderDictionary(dictionary);
    }

    if (window.dictionary && currentLanguage()) {
      changeLanguage(currentLanguage());
    }
    },
    current: currentLanguage
};

export default Dictionary;
