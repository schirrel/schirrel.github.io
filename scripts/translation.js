import Request from "./Request.js";

export const currentLanguage = () =>
  window.localStorage.getItem("schirrel-language") || "ptBr";

const languagesElement = document.querySelector("#languages");

const getDictionary = async () => {
  let dict = await Request.get("./assets/dicionario.json");
  return dict;
};

const renderLanguage = (key) => {
  let newLanguage = document.createElement("li");
  newLanguage.setAttribute("data-translation", key);
  newLanguage.innerText = key;
  newLanguage.onclick = (evt) => {
    if (evt.target && evt.target.getAttribute("data-translation")) {
      let language = (window.language = evt.target.getAttribute(
        "data-translation"
      ));
      changeLanguage(language);
    }
  };
  languagesElement.appendChild(newLanguage);
};

const translateText = (element) => {
  let selected = window.dictionary.languages[currentLanguage()];
  element.innerText = selected.dictionary[element.getAttribute("data-i18n")];
};
const translateAttrText = (element, attr) => {
  let selected = window.dictionary.languages[currentLanguage()];

  if (element.hasAttribute(attr)) {
    element.setAttribute(
      attr,
      selected.dictionary[element.getAttribute("data-i18n")]
    );
  }
};
const changeLanguage = (language) => {
  window.localStorage.setItem("schirrel-language", language);
  let toTranslate = document.querySelectorAll("[data-i18n]");

  Array.from(toTranslate).forEach((translateIt) => {
    translateText(translateIt);
    translateAttrText(translateIt, "data-text");
  });
};

const renderDictionary = (dictionary) => {
  for (var l in dictionary.languages) {
    renderLanguage(l);
  }
};

const initDictionary = async () => {
  let dictionary = await getDictionary();
  if (dictionary && dictionary.languages) {
    window.dictionary = dictionary;
    renderDictionary(dictionary);
  }

  if (window.dictionary && currentLanguage()) {
    changeLanguage(currentLanguage());
  }
};

const Dictionary = {
  init: initDictionary,
  current: currentLanguage,
};

export default Dictionary;
