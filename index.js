$(function(){
  $("#selectable").selectable({
    selected: function(event, ui) {
        $(ui.selected).addClass("ui-selected").siblings().removeClass("ui-selected");
      }
    });



  $(".card").draggable({
    revert:"invalid",
    opacity:0.3,

  });


});
 
