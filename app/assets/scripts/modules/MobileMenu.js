import $ from 'jquery';

class MobileMenu {
  // dom selection usually and firing events when a page loads.
  constructor(){
    this.menuButton = $('.mobile-menu');
    this.events();
  }

  //events to watch for such as click
  events(){


    this.menuButton.on('click', function(){

          $('.primary-nav').slideToggle(400, function() {
            $(this).toggleClass('.expand');

          });


    });

  }





}

export default MobileMenu;
