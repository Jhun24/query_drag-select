$(function(){
  $("#selectable").selectable({
    selected: function(event, ui) {
        $(ui.selected).addClass("ui-selected").siblings().removeClass("ui-selected");
      }
    });
});
