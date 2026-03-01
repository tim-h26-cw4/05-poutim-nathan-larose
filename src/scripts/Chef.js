import Poutim from "./Poutim.js";

export default class Chef{
    constructor(element){
        this.element = element;
        this.menu = [];
        this.container = this.element.querySelector('.js-final-selection');

        this.init();

    }

    init(){
        const poutims = this.element.querySelectorAll('.js-poutim');

        for (let i = 0; i < poutims.length; i++) {
            const poutim = poutims[i];
            const instance = new Poutim(poutim);
            this.menu.push(instance);
        }

        const btnValidate = this.element.querySelector('.js-validate');
        btnValidate.addEventListener('click', this.sendOrder.bind(this));
    }

    sendOrder(){
        this.container.innerHTML = "";

        let totalPoutims = 0;
        for (let i = 0; i < this.menu.length; i++) {
            const poutim = this.menu[i];

            if (poutim.selectedType !== "") {
                totalPoutims += 1;
            }
        }

        if(totalPoutims == 0)
        {
            const p = document.createElement("p");
            p.textContent = "FAITES UN CHOIX !";
            this.container.appendChild(p);
        } 
        else
        {
            /* const p = document.createElement("p");
            p.textContent = `Nombre total de poutine(s): ${totalPoutims}`;
            this.container.appendChild(p); */

            this.createHeader();
            this.createListItem();
            this.createFooter(totalPoutims);
        }
    }

    createHeader(){
        const h2 = document.createElement("h2");
        h2.textContent = "Voici le résumé de votre commande : ";
        this.container.appendChild(h2);
    }

    createListItem(){
        const p = document.createElement("p");
        this.container.appendChild(p);
        p.textContent = `Poutine sélectionnée :`;

        for (let i = 0; i < this.menu.length; i++) {
            const poutim = this.menu[i];
            
            if (poutim.selectedType && poutim.selectedType != "poutine") {
                p.textContent += ` ${poutim.selectedType}, `;
            }
        }
    }

    createFooter(totalPoutims){
        const p = document.createElement("p");
        p.textContent = `Nombre total de poutine(s): ${totalPoutims}`;
        this.container.appendChild(p);
    }
}
