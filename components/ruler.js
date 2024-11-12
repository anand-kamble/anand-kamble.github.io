class ruler {
    constructor() {
        this.name = 'ruler';

        this.root = document.createElement('div');
        this.root.id = 'ruler';
        this.root.classList.add('ruler');

        const vertical_line = document.createElement('div');
        vertical_line.id = 'vertical-line';
        vertical_line.classList.add('vertical-line');


        const mask1 = document.createElement('div');
        mask1.id = 'mask-1';
        mask1.classList.add('mask');
        this.root.appendChild(mask1);

        const mask2 = document.createElement('div');
        mask2.id = 'mask-2';
        mask2.classList.add('mask');
        this.root.appendChild(mask2);


        this.root.appendChild(vertical_line);


    }
    
    mount() {
        

        const markings = ["#main-page-text", "#experience-section-title", "#education-section-title"];

        markings.forEach((mark, i) => {
            const align_element = document.querySelector(mark);
            console.log(align_element.getBoundingClientRect().top);

            const top_offset = align_element.getBoundingClientRect().top + (align_element.offsetHeight/2);

            const mark_div = document.createElement('div');
            mark_div.id = 'mark-' + i;
            mark_div.classList.add('horizontal-line');
            mark_div.style.top = "0px";
            this.root.appendChild(mark_div);
            anime({
                targets: mark_div,
                top: [0, top_offset + "px"],
                duration: 1000,
                delay:500,
                easing: "easeInOutElastic(1, .6)",
            })
        });
        document.body.appendChild(this.root);


        anime({
            targets: this.root,
            height: [0, document.body.offsetHeight],
            duration: 500,
            easing: 'linear',
        })
    }
}

export default new ruler();