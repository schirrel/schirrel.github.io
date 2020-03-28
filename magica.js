

const languagesElement = document.querySelector('#languages');

const fetchDictionary = async () => {
    let dict = await fetch('dicionario.json').then(res => res.json());
   return dict;
}

const renderLanguage = (key, language) => {
    let newLanguage = document.createElement('li');
    newLanguage.setAttribute('data-translation', key);
    newLanguage.innerText = language.name;
    languagesElement.appendChild(newLanguage);
}

const changeLanguage = (language) => {
    console.log(window.dictionary);
    let toTranslate = document.querySelectorAll('[data-i18n]');

    let selected = window.dictionary.languages[language];

    console.log(language)
    for (let t = 0; t < toTranslate.length; t++) { 
        toTranslate[t].innerText = selected.dictionary[toTranslate[t].getAttribute('data-i18n')]

    }
    
}

const renderDictionary = (dictionary) => {
    for (var l in dictionary.languages) {
        renderLanguage(l, dictionary.languages[l])
    }
 
    let languages = document.querySelectorAll('[data-translation]');

    for (i = 0; i < languages.length; i++){
        languages[i].onclick = (evt) => {
            console.log(evt.target) 
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





initDictionary();