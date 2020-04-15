import Blog from './blog.js';


const setDataSection = (dataSection) => {
  if (dataSection) {
    document.body.setAttribute('data-section', dataSection);
  } else {
    document.body.removeAttribute('data-section');
  }
    validateDataSection();
};

const validateDataSection = () => {
  Array.from(document.querySelectorAll('section')).forEach((section) =>
    section.classList.remove('active')
  );
  let toShow = document.body.getAttribute('data-section');
  if (toShow) {
    setTimeout(() => {
      document.body.setAttribute('data-section-active', true);
    }, 300);

    document.querySelector(`#${toShow}`).classList.add('active');

    if (toShow === 'blog') {
      Blog.init();
    }
  } else {
    document.body.removeAttribute('data-section-active');
  }
};


const validateLocation = () => {
  let currentPath = window.location.hash;
  if (currentPath.indexOf('#blog') === 0) {
      setDataSection('blog');
  }
};
const contentManager = () => {
  validateLocation();
};

const Content = {
    init: contentManager,
    setDataSection:setDataSection
};

export default Content;
