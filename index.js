// Step 1: Bounce the dot a couple of times.
let loading = true;
let bounceState = false;

const interval = setInterval(() => {
  if (loading) {
    if (bounceState) {
      anime({
        targets: "#loading-dot",
        translateY: 0,
        duration: 500,
        height: "2vh",
        width: "2vh",
        easing: "easeInElastic(1, 1)",
      });
    } else {
      anime({
        targets: "#loading-dot",
        translateY: -100,
        duration: 500,
        height: "2vh",
        width: "2vh",
        easing: "easeOutElastic(1, 1)",
      });
    }
    bounceState = !bounceState;
  } else{
    anime({
      targets: "#loading-dot",
      backgroundColor: "#000",
      height: ["2vh", "98vh"],
      width: ["2vh", "98vw"],
      translateY: 0,
      borderRadius: ["20px", "20px"],
      duration: 500,
      easing: 'cubicBezier(0.100, 0.360, 0.000, 1.020)'

    });
    clearInterval(interval);
  }
}, 500);

const setLoading = (value) => {
  loading = value;
  
};

setTimeout(() => {
  setLoading(false);
}, 3000);

// anime({
//   targets: '#loading-dot',
//   height: ["2vh", "2vh"],
//   width: ["2vh", "2vh"],
//   translateY : [0,100],
//   duration: 500,
//   easing: 'easeInElastic(1, 1)'

// });
// anime({
//   targets: '#loading-dot',
//   height: ["2vh", "2vh"],
//   width: ["2vh", "2vh"],
//   translateY : [100,0],
//   duration: 500,
//   easing: 'easeOutElastic(1, 1)'

// });

// timeline.add({
//   targets: '#loading-dot',
//   height: [40, "98vh"],
//   width: [40, "98vw"],
//   translateY : [100, 0],
//   borderRadius: ["50px", "50px"],
// })

// Step 3: Fade out the loading overlay while fading in the frosted container.
//   timeline.add({
//     targets: '#loading-overlay',
//     opacity: [1, 0],
//     duration: 300,
//     easing: 'linear',
//     complete: function() {
//       // Hide the overlay and reveal the frosted container.
//       document.getElementById('loading-overlay').style.display = 'none';
//       anime({
//         targets: '.frosted-container',
//         opacity: [0, 1],
//         duration: 300,
//         easing: 'easeInOutQuad'
//       });
//     }
//   });

// Step 4: Animate text lines (h1 and p) appearing one by one.
// Delay this animation until after the container is fully visible.
// timeline.finished.then(() => {
//   anime.timeline({
//     easing: 'easeOutExpo',
//     duration: 300,
//     delay: anime.stagger(100)
//   }).add({
//     targets: '.line',
//     opacity: [0, 1],
//     translateY: [20, 0]
//   });
// });
