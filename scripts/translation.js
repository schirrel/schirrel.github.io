

const languagesElement = document.querySelector('#languages');

const fetchDictionary = async () => {
    let dict = await fetch('./assets/dicionario.json').then(res => res.json());
   return dict;
}

const renderLanguage = (key, language) => {
    let newLanguage = document.createElement('li');
    newLanguage.setAttribute('data-translation', key);
    newLanguage.innerText = key;//language.name;
    languagesElement.appendChild(newLanguage);
}

const changeLanguage = (language) => {
    let toTranslate = document.querySelectorAll('[data-i18n]');

    let selected = window.dictionary.languages[language];
    for (let t = 0; t < toTranslate.length; t++) { 
        toTranslate[t].innerText = selected.dictionary[toTranslate[t].getAttribute('data-i18n')];
        if (toTranslate[t].hasAttribute('data-text')) {
            toTranslate[t].setAttribute('data-text', selected.dictionary[toTranslate[t].getAttribute('data-i18n')]);
        }

    }
    
}

const renderDictionary = (dictionary) => {
    for (var l in dictionary.languages) {
        renderLanguage(l, dictionary.languages[l])
    }
 
    let languages = document.querySelectorAll('[data-translation]');

    for (let i = 0; i < languages.length; i++){
        languages[i].onclick = (evt) => {
            if (evt.target && evt.target.getAttribute('data-translation')) {
                let language = window.language = evt.target.getAttribute('data-translation');  
                changeLanguage(language);
            }
        }
    }



}
const initDictionary = async () => {
    let dictionary = await fetchDictionary();
    if (dictionary && dictionary.languages) {
        window.dictionary = dictionary;
        renderDictionary(dictionary);
    }
}




export default initDictionary;