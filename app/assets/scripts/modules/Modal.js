import $ from 'jquery';

class Modal {
    constructor(){
        this.openModalButton = $(".open-modal"); 
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events();
    }

    events(){
        //clicking the open modal button
        this.openModalButton.click(this.OpenModal.bind(this));
        // clicking the x close modal button
        this.closeModalButton.click(this.CloseModal.bind(this));
        // pushes any key
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e){
        if(e.keyCode == 27){
            this.CloseModal();
        }
    }

    // methods
    OpenModal(){
        this.modal.addClass("modal--is-visible");
        return false; //prevent scroll up when click on link with the # only
    }

    CloseModal(){
        this.modal.removeClass("modal--is-visible")
    }
}

export default Modal;