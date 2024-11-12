class main {
  constructor() {
    this.transition_holder = document.createElement("div");
    this.transition_holder.id = "transition-holder";
    this.transition_holder.style.opacity = 0;

    this.transition_div = document.createElement("div");
    this.transition_div.id = "transition-div-1";
    this.transition_div.classList.add("transition-div");

    this.transition_div2 = document.createElement("div");
    this.transition_div2.id = "transition-div-2";
    this.transition_div2.classList.add("transition-div");

    this.transition_holder.appendChild(this.transition_div);
    this.transition_holder.appendChild(this.transition_div2);

    this.sub_transition_div1 = document.createElement("div");
    this.sub_transition_div1.id = "sub-transition-div-1";
    this.sub_transition_div1.classList.add("sub-transition-div");

    this.sub_transition_div2 = document.createElement("div");
    this.sub_transition_div2.id = "sub-transition-div-2";
    this.sub_transition_div2.classList.add("sub-transition-div");

    this.transition_div.appendChild(this.sub_transition_div1);
    this.transition_div2.appendChild(this.sub_transition_div2);

    document.body.appendChild(this.transition_holder);
  }

  // start(onComplete) {
  //   anime({
  //     targets: ["#transition-div-1","#transition-div-2"],
  //     height: "0vh",
  //     delay: anime.stagger(200),
  //     duration: 1000,
  //     easing: 'easeInOutExpo',
  //     loop: false,
  //     // complete: onComplete
  //   }).finished.then(() => {
  //     onComplete()
  //   })
  // }

  start(cb) {
    const main_text= document.getElementById("main-page-text");
    const main_text_width = main_text.offsetWidth * 1.2;

    console.log(main_text.offsetTop);
    this.transition_holder.style.top = main_text.offsetTop + "px";
    // this.transition_holder.style.left = (main_text.offsetLeft - (main_text_width/8))  + "px";
    this.transition_holder.style.opacity = 1;

    const time = 750;
    setTimeout(() => {
      cb();
    }, (time));

    const easing = "easeOutQuart";


    anime({
      targets: this.transition_div,
      marginRight: [main_text_width/2, 0],
      width: [main_text_width/2, main_text_width/2],
      duration: time/2,
      easing: easing,
      complete: () => {
        anime({
          targets: this.transition_div,
          width: [main_text_width/2, main_text_width/8, 0],
          marginRight: [0, main_text_width/2, main_text_width/2 + main_text_width/8],
          duration: time/2,
          easing: easing,
        });
      },
    });
    anime({
      targets: this.transition_div2,
      marginLeft: [main_text_width/2, 0],
      width: [main_text_width/2, main_text_width/2],
      duration: time/2,
      easing: easing,
      complete: () => {
        anime({
          targets: this.transition_div2,
          width: [main_text_width/2, main_text_width/8, 0],
          marginLeft: [0, main_text_width/2,main_text_width/2 + main_text_width/8],
          duration: time/2,
          easing: easing,
        });
      },
    });
    const sub_easing = "easeInOutBack";
    anime({
      targets: this.sub_transition_div1,
      marginRight: [main_text_width/2, 0],
      duration: time/2,
      easing: sub_easing,
      complete: () => {
        anime({
          targets: this.sub_transition_div1,
          width: [main_text_width/4,  0],
          duration: time/2,
          easing: sub_easing,
        });
      },
    });
    anime({
      targets: this.sub_transition_div2,
      marginLeft: [main_text_width/8, 0],
      duration: time/2,
      easing: sub_easing,
      complete: () => {
        anime({
          targets: this.sub_transition_div2,
          width: [main_text_width/4,  0],
          duration: time/2,
          easing: sub_easing,
        });
      },
    });
  }
}

export default new main();
