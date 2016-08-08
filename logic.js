$( document ).ready(function () {
  var num = 0;

  $('.block-content').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).css('visibility' ,'visible');
      var anim = careParte(num);
      num++;

      $(this).addClass( "animated " +anim );
    } else {
      $(this).css('visibility' ,'hidden');
      $(this).removeClass('animated slideInLeft slideInRight');
    }
  });
  function careParte(num){
    if(num%2 == 0){

      return 'slideInLeft';
    }else{

      return 'slideInRight';
    }
  }

})
