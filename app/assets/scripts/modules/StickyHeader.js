import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  // dom selection usually and firing events when a page loads.
  constructor(){
    this.headerLinks = $("nav.primary-nav a");
    // this.headerAttr = this.headerLinks.prop('href');
    this.events();
    $.smoothScroll();
  }
  
  events() {
    var that = this;
    this.headerLinks.each(function() {
      that.headerLinks.click(function() {
      $.smoothScroll({
        scrollElement: that.headerLinks,
        speed: 1000,
        offset: -100,
        scrollTarget: that.headerLinks.attr('href')
      });
      console.log(that.headerLinks.attr('href'));
      return false;
      });
    });
    
  }
}

export default StickyHeader;