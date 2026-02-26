export default class Poutim{
    constructor(element){
        this.element = element;
        this.types = this.element.querySelectorAll('.js-button');
        this.selectedType = "";

        this.init();
    }
    
    init(){
        for (let i = 0; i < this.types.length; i++) {
            const button = this.types[i];

            button.addEventListener('click', this.selecType.bind(this));
        }
        
    }

    selecType(event){
        for (let i = 0; i < this.types.length; i++) {
            const type = this.types[i];
            type.classList.remove('is-active');
        }
        event.currentTarget.classList.add('is-active');

        const text =  event.currentTarget.innerText;
        this.selectedType = text;

        this.updatePhoto();
    }

    updatePhoto(){
        const image = this.element.querySelector(".poutine__image");

        image.classList.add('is-active');
        image.src = `assets/images/${this.selectedType}.png`;
    
    }   
}
