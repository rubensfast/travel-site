import $ from 'jquery';

class MobileMenu {
    constructor(){        
        // target site header
        this.siteHeader = $('.site-header');
        // select icon
        this.menuIcon = $('.site-header__menu-icon');
        // select menu
        this.menuContent = $('.site-header__menu-content');
        this.events();
    }
    
    events(){
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }
    
    // methods
    toggleTheMenu(){
        // adicione e remove classe no menu
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}
export default MobileMenu;