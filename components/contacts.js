class contacts {
    constructor() {
        this.root = document.createElement("div");

        this.root.id = "contacts";
        this.root.classList.add("contacts");

        this.root.innerHTML = `
        <div id="contact-title" class="section-title">
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>T</span>
            <span>S</span>
        </div>
        <div id="contact-info" class="contact-info">
            <h3 id="contact-email" class="contact">
                <span>Email : </span>
                <span>
                    <a href="mailto:
                    ${__EMAIL}
                    ">${__EMAIL}</a>       
                </span>
            </h3>
            <h3 id="contact-phone" class="contact">
                <span>Phone : </span>
                <span>
                    <a href="tel:
                    ${__PHONE}
                    ">${__PHONE}</a>
                </span>
            </h3>
            <h3 id="contact-git" class="contact">
                <span>GitHub : </span>
                <span>
                    <a href="
                    ${__GITHUB}
                    ">${__GITHUB}</a>
                </span>
            </h3>
            <h3 id="contact-linkedin" class="contact">
                <span>LinkedIn : </span>
                <span>
                    <a href="
                    ${__LINKEDIN}
                    ">${__LINKEDIN}</a>
                </span>
            </h3>
        </div>

        `;


    }

    mount() {
        document.body.appendChild(this.root);
    }


}

export default new contacts();