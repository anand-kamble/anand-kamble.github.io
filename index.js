// const accent = require('./components/accent.js');
import accent from "./components/accent.js";
import transition from "./components/transition.js";
import main_page from "./components/main-page.js";
import Experience from "./components/Experience.js";
import Education from "./components/Education.js";
import Project from "./components/Project.js";
import Publications from "./components/Publications.js";
import contacts from "./components/contacts.js";
// Description: This file is the entry point for the application.

const root = () => {
  // accent.start();
  
  setTimeout(() => {
    accent.end();
    accent.transition();

    main_page.mount();
    main_page.fadeIn();
    transition.start((anim) => {
      window.scrollTo(0, 0);
      // transition2.mount();
      Experience.mount(() => {
        Education.loadIn();
      });
      Education.mount();
      accent.unmount();
      Project.mount();
      Publications.mount();
      contacts.mount();
      // transition2.mount();
      // fun.mount();
      // ruler.mount();
    });
  }, 2000);
};

window.onload = root;
