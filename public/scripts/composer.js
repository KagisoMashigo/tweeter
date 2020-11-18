const scroller = () => {
  $(window).on( 'scroll', function(){
  console.log('Event Fired');
})
}

$(document).ready(() => {
  scroller()

});