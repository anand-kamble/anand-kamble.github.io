class Experience {
  constructor() {
    this.root = document.createElement("div");

    this.root.id = "experience";
    this.root.classList.add("component");

    this.background_text = document.createElement("p");
    this.background_text.id = "experience-background-text";
    this.background_text.classList.add("background-text");
    this.background_text.textContent = "EXPERIENCE";
    this.root.appendChild(this.background_text);


    this.section_title = document.createElement("p");
    this.section_title.id = "experience-section-title";
    this.section_title.classList.add("section-title");
    const textContent = "Experience".split("");

    textContent.forEach((letter, i) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.opacity = this.mobileCheck() ? 1 : 0;;
      this.section_title.appendChild(span);
    });

    this.root.appendChild(this.section_title);

    this.all_experience_holder = document.createElement("div");
    this.all_experience_holder.id = "all-experience-holder";
    this.all_experience_holder.classList.add("all-holder");

    this.experience_card_animations = new Array(__EXPERIENCE.length).fill(null);

    this.cards = [];

    __EXPERIENCE.forEach((exp, i) => {
      const experience_card = document.createElement("div");
      experience_card.id = "experience-" + i;
      experience_card.classList.add("card");

      const title = document.createElement("h3");
      title.id = "experience-title-" + i;
      title.textContent = exp.title;
      const company = document.createElement("h4");
      company.id = "experience-company-" + i;
      company.textContent = exp.company;
      const date = document.createElement("p");
      date.id = "experience-date-" + i;
      date.textContent = exp.date;

      const skills_holder = document.createElement("div");
      skills_holder.id = "skills-holder-" + i;
      skills_holder.classList.add("skills-holder");

      exp.skills.forEach((skill, j) => {
        const skill_element = document.createElement("div");
        skill_element.id = "experience-skill-" + i + "-" + j;
        skill_element.classList.add("skill");
        skill_element.textContent = skill;
        skills_holder.appendChild(skill_element);
      });

      const tassel = document.createElement("div");
      tassel.id = "tassel-" + i;
      tassel.classList.add("tassel");
      experience_card.appendChild(tassel);
      experience_card.appendChild(title);
      experience_card.appendChild(company);
      experience_card.appendChild(date);
      experience_card.appendChild(skills_holder);
      experience_card.style.opacity =  this.mobileCheck() ? 1 : 0;

      this.all_experience_holder.appendChild(experience_card);
      this.cards.push(experience_card);
    });

    this.root.appendChild(this.all_experience_holder);
  }

  mount(cb) {
    document.body.appendChild(this.root);
    this.experience_loaded = false;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].intersectionRatio < 1) {
          return;
        }

        if (!this.experience_loaded) {

          anime({
            targets: "#experience-section-title span",
            opacity: [0, 1],
            marginLeft: [10, 0],
            delay: anime.stagger(20),
            duration: 100,
            easing: "easeInExpo",
            complete:() => {
              anime({
                targets: this.cards,
                opacity: [0, 1],
                // translateX: [100, 0],
                delay: anime.stagger(100),
                duration: 300,
                easing: "easeInExpo",
                complete: () => {
                  cb();
                }
              })
            }
          })
          

          this.experience_loaded = true;
        }
      },
      {
        root: null,
        rootMargin: "10px",
        threshold: 1,
      }
    );

    observer.observe(this.section_title);
  }

  getRoot() {
    return this.root;
  }

  scrollPercent() {
    const bodyST = document.body.scrollTop;
    const docST = document.documentElement.scrollTop;
    const docSH = document.documentElement.scrollHeight;
    const docCH = document.documentElement.clientHeight;

    return ((docST + bodyST) / (docSH - docCH)) * 100;
  }

  createGrid(container) {
    // create a grid in canvas to display the experience cards
    const canvas = document.createElement("canvas");
    canvas.id = "experience-grid";
    canvas.classList.add("experience-grid");

    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    const ctx = canvas.getContext("2d");

    const grid_size = 20;
    const grid_color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--main");
    const grid_opacity = 1;

    ctx.strokeStyle = grid_color;
    ctx.globalAlpha = grid_opacity;


    for (let i = 0; i < (container.offsetWidth/grid_size*2)  ; i++) {
      ctx.beginPath();
      ctx.moveTo(grid_size * i,0 );
      ctx.lineTo(grid_size * (i - 10), container.offsetHeight);
      ctx.stroke();
    }


    for (let i = 0; i < (container.offsetWidth/grid_size*2)  ; i++) {
      ctx.beginPath();
      ctx.moveTo( grid_size * (i - 10),0 );
      ctx.lineTo( grid_size * (i), container.offsetHeight);
      ctx.stroke();
    }
    const gradient = ctx.createLinearGradient(
      container.offsetWidth / 2,
      0,
      container.offsetWidth / 2,
      container.offsetHeight
    );
    gradient.addColorStop(
      0,
      getComputedStyle(document.documentElement).getPropertyValue("--bgcolor")
    );
    gradient.addColorStop(1, "transparent");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, container.offsetWidth, container.offsetHeight);

    canvas.style.zIndex = 100;
    canvas.style.position = "absolute";
    canvas.style.transform = "translate(-1rem, -1rem)";

    container.prepend(canvas);
  }

  mobileCheck() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };
  
}

export default new Experience();
