import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.closeModalButton = $(".modal__close");
        this.modal = $(".modal");
        this.events();
    }

    events() {
        //cliking the open modal button
        this.openModalButton.click(this.openModal.bind(this));
        
        //cliking the x close modal button
        this.closeModalButton.click(this.closeModal.bind(this));

        //pushes any key
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e) {
        if(e.keyCode == 27) {
            this.closeModal();
        }
    }
    
    openModal() {
        this.modal.addClass("modal--is-visible");
        return false;
    }

    closeModal() {
        this.modal.removeClass("modal--is-visible");
    }
}

export default Modal;