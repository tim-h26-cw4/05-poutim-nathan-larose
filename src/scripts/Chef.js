import Poutim from "./Poutim.js";

export default class Chef{
    constructor(element){
        this.element = element;
        this.menu = [];
        this.container = document.querySelector('.js-final-selection');

        this.init();

    }

    init(){
        const poutims = document.querySelectorAll('.js-poutim');
        for (let i = 0; i < poutims.length; i++) {
            const poutim = poutims[i];
            const instance = new Poutim(poutim);
            this.menu.push(instance);
        }

        const btnValidate = this.element.querySelector('.js-validate');
        btnValidate.addEventListener('click', this.sendOrder.bind(this));
    }

    sendOrder(){
        console.log("commande");
    }
}
