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
        const button = event.currentTarget;
 
        if (button.classList.contains('is-active')) {
            button.classList.remove('is-active');

            this.selectedType = "";

            this.updatePhoto();

            return;
        }
        
        for (let i = 0; i < this.types.length; i++) {
            const type = this.types[i];
            type.classList.remove('is-active');
            
        }
        
        button.classList.add('is-active');

        const text =  button.innerText;
        this.selectedType = text;

        this.updatePhoto();

    }

    updatePhoto(){
        const image = this.element.querySelector(".poutine__image");

        if(this.selectedType != ""){
            image.classList.add('is-active');

        } 
        else{
            this.selectedType = "poutine";
            image.classList.remove('is-active');
            
        }

        image.src = `assets/images/${this.selectedType}.png`;
    
    }   
}
