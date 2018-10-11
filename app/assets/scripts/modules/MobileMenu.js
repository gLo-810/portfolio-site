import $ from 'jquery';

class MobileMenu {
  // dom selection usually and firing events when a page loads.
  constructor(){
    this.menuButton = $('.mobile-menu');
    this.events();
  }

  //events to watch for such as click
  events(){


    this.menuButton.on('click', () => {

          //set min-height
          let minHeight = $('.primary-nav').css('min-height');

          //disable min-height for smooth slide, then re enable in the function
          $('.primary-nav').css('min-height', 0).slideToggle(400, function() {
            $(this).toggleClass('.expand');
            $(this).css('min-height', minHeight);

          });


    });

  }





}

export default MobileMenu;
