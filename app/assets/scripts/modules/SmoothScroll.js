import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class SmoothScroll {
  constructor(){
    this.links = $('.primary-nav a, .icons a');
    this.events();
  }

  events(){
    
      this.links.smoothScroll({
        offset: -80,
        speed: 875,
        preventDefault: true
      });
      
  }





}

export default SmoothScroll;
