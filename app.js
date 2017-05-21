$(document).ready(function(){
  //Declare Vars
  var totalWidth=0;
  var positions= new Array();

  $("#slides, .slide").each(function(i){
    //get slider widths
    positions[i]=totalWidth;
    totalWidth+=$(this).width();
    //check slider widths
    if(!$(this).width()){
      alert("Please add a width to you images");
      return false;
    }
  });
    //set slider width
  $("#slides").width(totalWidth);
    //MENU ITEM click handler
  $("#menu ul li a").click(function(e,keepScroll){
    //remove active class & add inactive class
    $("li.product").removeClass("active").addClass("inactive");
      //add active class to parent
      $(this).parent().addClass("active");

      var pos=$(this).parent().prevAll(".product").length;

      $("#slides").stop().animate({marginLeft:-positions[pos]+"px"},450);

      //prevent default
      e.preventDefault();

      //stop autoScroll
      if(!autoScroll) clearInterval(itvl);
  });
    //make first image active
    $("#menu ul li.product:first").addClass("active").siblings().addClass("inactive");

    //auto Scroll
    var current=1;

    function autoScroll(){
      if(current== -1) return false;

      $("#menu ul li a").eq(current%$("#menu ul li a").length).trigger("click",[true]);
      current++;
    }

    //duration for auto Scroll
    var duration= 10;
    var itvl=setInterval(function(){autoScroll()},duration*1000)

});
