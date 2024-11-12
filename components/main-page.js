class main_page {
  constructor() {
    this.page = null;
    this.page_text = null;

    this.page = document.createElement("div");
    this.page.id = "main-page";
    this.page.classList.add("main-page");
    this.page.style.opacity = 0;

    this.page_text = document.createElement("div");
    this.page_text.style.zIndex = 100;

    // Title
    this.page_title = document.createElement("p");
    this.page_title.id = "main-page-text";
    this.page_title.classList.add("my-name");
    // this.page_title.textContent = __TITLE;

    const textContent = __TITLE.split("");

    textContent.forEach((letter, i) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.classList.add("main_page_letter");
      this.page_title.appendChild(span);
    });

    this.page_text.appendChild(this.page_title);

    

    // Subtitle

    this.page_subtitle = document.createElement("p");
    this.page_subtitle.id = "main-page-subtitle";
    this.page_subtitle.classList.add("subtitle");
    // this.page_subtitle.textContent = __SUBTITLE;

    __SUBTITLE?.split("").forEach((letter, i) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.opacity = 0;
      span.classList.add("main_page_letter");
      this.page_subtitle.appendChild(span);
    });

    this.page_text.appendChild(this.page_subtitle);


    this.scroll_down = document.createElement("div");
    this.scroll_down.id = "scroll-down";
    this.scroll_down.classList.add("scroll-down");
    this.scroll_down.style.opacity = 1;
    this.scroll_down.style.color = "var(--textcolor)";
    this.scroll_down.innerHTML = "V<br></br>SCROLL DOWN";
    this.scroll_down.style.opacity = 0;

    this.page.appendChild(this.scroll_down);

    this.page.appendChild(this.page_text);
  }

  mount() {
    this.createBackground();
    document.body.appendChild(this.page);
    // timeline.add_listener(this.scroll.bind(this));
  }

  unmount() {
    document.body.removeChild(this.page);
  }

  append(node) {
    this.page.appendChild(node);
  }

  fadeIn() {
    anime({
      targets: this.page_text,
      opacity: [0, 1],
      scale: [0, 1.2],
      duration: 250,
      easing: "easeInOutQuart",
      complete: () => {
        setTimeout(() => {
          anime({
            targets: "#main-page-subtitle span",
            delay: anime.stagger(20),
            opacity: [0, 1],
            duration: 500,
            easing: "easeInOutQuart",
          });
        },1000)
        anime({
          targets: this.page_text,
          scale: [1.2, 1],
          duration: 3000,
          easing: "easeOutQuart",
          complete: () => {
            anime({
              targets: this.scroll_down,
              opacity: [0, 1],
              duration: 1000,
              easing: "easeInOutQuart",
            });
          },
        });
      },
    });
    anime({
      targets: this.page,
      opacity: [0, 1],
      duration: 1000,
      easing: "easeInOutQuart",
    });
  }

  createBackground() {
    const style = getComputedStyle(document.body);

    const accent = style.getPropertyValue("--bgmain");
    const accent2 = style.getPropertyValue("--bgsec");

    // Create a canvas element
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "absolute";
    canvas.style.backgroundColor = accent;
    canvas.style.zIndex = 90;

    // Get the context to draw on the canvas
    // const ctx = canvas.getContext("2d");
    // ctx.strokeStyle = "green";
    // ctx.fillStyle = accent2;
    // ctx.lineWidth = 2;
    // ctx.lineCap = "round";

    // const centerX = canvas.width / 2;
    // const centerY = canvas.height / 2;

    // // Define the number of lines and length
    // const numberOfLines = 100;
    // const maxLength = Math.min(canvas.width, canvas.height) / 2;

    // const shapes = [
    //   {points : [[0.05,0.2],[0.05,0.3],[1,0],[1,-0.4]]},
    //   {points : [[-0.05,0.2],[-0.05,0.3],[-1,0],[-1,-0.4]]},
    //   {points : [[-0.05,0.32],[-0.05,0.5],[-1,0.8],[-1,0.1]]},
    //   {points : [[0.05,0.32],[0.05,0.5],[1,0.8],[1,0.1]]},
    //   {points : [[0.05,0.15],[0.05,0.1],[1,-0.95],[1,-0.8]]},
    //   {points : [[0.05,0.05],[0.05,-0.0],[0.6,-1],[0.9,-1]]},
    //   {points : [[-0.05,0.15],[-0.05,0.1],[-1,-0.95],[-1,-0.8]]},
    //   {points : [[-0.05,0.05],[-0.05,-0.0],[-0.6,-1],[-0.9,-1]]},
    // ];

    // // Draw the lines
    // shapes.forEach((shape) => {
    //   ctx.beginPath();
    //   shape.points.forEach((point, i) => {
    //     const x = (point[0] * (canvas.width/2)) + centerX;
    //     const y = (point[1] * (canvas.height/2)) + centerY;
    //     if(i === 0){
    //       ctx.moveTo(x, y);
    //     } else {
    //       ctx.lineTo(x, y);
    //     }
    //   });
    //   ctx.closePath();

    //   ctx.fill();
    // });

    // canvas.style.filter = "blur(5px)";
    // canvas.style.opacity = 0.5;

    // this.append(canvas);

    const background = document.createElement("div");
    background.id = "particles-js";
    background.style.position = "absolute";
    background.style.width = "100vw";
    background.style.height = "100vh";
    background.style.zIndex = 0;
    background.style.position = "fixed";

    this.append(background);
    particlesJS.load("particles-js", "assets/particles.json", function () {
      console.log("callback - particles.js config loaded");
    });
  }
}

export default new main_page();
