class fun {
    constructor() {
        this.name = "fun";

        this.root = document.createElement("div");


        this.root.id = "fun";

        
        
    }

    mount() {
        document.body.appendChild(this.root);
    }
}

export default new fun();