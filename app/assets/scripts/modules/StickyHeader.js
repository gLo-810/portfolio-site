import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  
  constructor(){
    this.headerLinks = $("nav.primary-nav a");
    this.events();
    $.smoothScroll();
  }
  
  events() {
    var that = this;
    this.headerLinks.click(function() {
      var currentLink = that.headerLinks
      var matchCurrentLink = currentLink.attr('data-matching-link');
      currentLink.each(function(e){
        
      });
      $.smoothScroll({
        scrollElement: e.currentLink,
        speed: 1000,
        offset: -100,
        scrollTarget: matchCurrentLink
      });
      console.log(that.headerLinks.attr('href'));
      console.log(matchCurrentLink);  
      return false;
    });
    
  }
}

export default StickyHeader;