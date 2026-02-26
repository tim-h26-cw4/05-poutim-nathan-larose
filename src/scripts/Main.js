import Chef from "./Chef.js";
import Icons from "./utils/Icons.js";

class Main{
    constructor(){
        this.init();
    }

    init(){
        Icons.load();

        const chefs = document.querySelectorAll('[data-component="chefs"]');
        for (let i = 0; i < chefs.length; i++) {
            const chef = chefs[i];
            
            new Chef(chef);
        }
    }
}

new Main();
