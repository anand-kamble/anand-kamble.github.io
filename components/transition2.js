class transition2 {
  constructor() {
    this.name = "transition2";

    this.root = document.createElement("div");
    this.root.id = "transition2";

    // div of increasing height

    const color1 = [1, 1, 1];
    const color2 = [1, 0.27450980392156865, 0.3333333333333333];

    for (let i = 1; i <= 15; i++) {
      const line = document.createElement("div");
      line.id = "line-" + i;
      line.classList.add("line");
      line.style.height = i ** 2 + "px";
      line.style.marginBottom = i ** 2 + "px";

      const t = i / 15; // normalize i to range from 0 to 1

      // Interpolate each RGB channel separately
      const r = (1 - t) * color1[0] + t * color2[0];
      const g = (1 - t) * color1[1] + t * color2[1];
      const b = (1 - t) * color1[2] + t * color2[2];

      line.style.backgroundColor = `rgb(${r * 255}, ${g * 255}, ${b * 255})`;
      this.root.appendChild(line);
    }
  }

  mount() {
    document.body.appendChild(this.root);
    // anime({
    //     targets: '.line',
    //     height: [0, document.body.offsetHeight],
    //     duration: 500,
    //     delay: (el, i) => 500 * i,
    //     easing: "easeInOutElastic(1, .6)",
    // })
  }
}

export default new transition2();
