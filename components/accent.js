/**
 * This function adds accent lines using the morse code
 * @param {string} morse_code code to be added to acccent lines
 */
const add_accent_lines = (morse_code) => {
  // Get all the elements with the class name 'accent-line'
  const accent_lines = Array.from(
    document.getElementsByClassName("accent-lines")
  );

  // Split the morse code into individual characters
  const morse_code_array = morse_code.split("");

  // Iterate over the morse code array
  morse_code_array.forEach((character) => {
    // Create a new div element
    const new_div = document.createElement("div");

    if (character === ".") {
      // Add the class 'dot' to the new div element
      new_div.classList.add("accent-dot");
    } else if (character === "_") {
      // Add the class 'dash' to the new div element
      new_div.classList.add("accent-line");
    }

    // Append the new div element to the accent lines
    accent_lines.forEach((line) => {
      line.appendChild(new_div.cloneNode());
    });
  });
};

class main {
  constructor() {
    this.accentHolder = null;
    this.accentLines1 = null;
    this.accentLines2 = null;
    this.interval_id = null;
  }

  start() {
    // Create a div element
    this.accentHolder = document.createElement("div");
    this.accentHolder.id = "accent-holder";

    // Create a nested div element
    this.accentLines1 = document.createElement("div");
    this.accentLines1.classList.add("accent-lines");
    this.accentLines1.id = "accent-lines-1";
    this.accentLines2 = document.createElement("div");
    this.accentLines2.classList.add("accent-lines");
    this.accentLines2.classList.add("flipped-accent-lines");
    this.accentLines2.id = "accent-lines-2";

    // Add loading text to the accent holder
    const loadingText = document.createElement("p");
    loadingText.classList.add("loading-text");
    loadingText.textContent = "Loading";
    this.accentHolder.appendChild(loadingText);

    // let loading_suffixes = ["   ", ".   ", "..  ", "... ", "...."];
    // let loading_suffix_index = 0;
    // let loading_suffix = loading_suffixes[loading_suffix_index];
    // this.interval_id = setInterval(() => {
    //   loading_suffix_index =
    //     (loading_suffix_index + 1) % loading_suffixes.length;
    //   loading_suffix = loading_suffixes[loading_suffix_index];
    //   loadingText.textContent = `Loading${loading_suffix}`;
    // }, 500);

    // Append the nested div to the accent holder
    this.accentHolder.appendChild(this.accentLines1);
    this.accentHolder.appendChild(this.accentLines2);

    // Append the accent holder to the body of the document
    document.body.appendChild(this.accentHolder);

    const morse_code = "._ _. ._ _. _..";

    add_accent_lines(morse_code);
  }

  end() {
    // clearInterval(this.interval_id);
    anime({
      targets: ".loading-text",
      opacity: 0,
      duration: 1000,
    });
  }

  transition() {
    anime({
      targets: "#accent-lines-1",
      translateX: window.innerWidth - this.accentLines2.offsetWidth - 40,
      opacity: 0,
      duration: 1000,
      width: this.accentLines2.offsetWidth,
      easing: "easeInOutExpo",
    });

    anime({
      targets: "#accent-lines-2",
      translateX: 0 - (window.innerWidth - this.accentLines2.offsetWidth - 40),
      opacity: 0,
      duration: 1000,
      easing: "easeInOutExpo",
    });

    // this.accentLines1.style.float = "right";
    // this.accentLines2.style.float = "left";
  }

  unmount() {
    document.body.removeChild(this.accentHolder);
  }
}
const accent = new main();
export default accent;
