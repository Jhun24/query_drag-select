$(function(){


  $(".card").draggable({
  		revert:"invalid",
  	
  		cursor:"move",
  		appendTo:"body",

  		helper:"clone",
  		opacity:0.3,
  	});
  $(".textBox").droppable({
  	tolerance:"intersect",
  	accept:".card",
  	hoverClass:"droppable-active",

  	drop:function(event, ui){
  		$(this).append($(ui.draggable));

  	}
  });


  $(".card").mouseover(function(){

  		$(this).css(
  			"background-color","#00CCCC"
  		);
  		
 	 });

		$(".card").mouseout(function(){
			$(this).css(
				"background-color","white"
				);
		});

		$(".card").click(function(){
			$(this).css(
				"background-color","#00CCCC"
				);
		})


 	//$("#selectable").selectable({
   	// selectd: function(event, ui) {
        //$(ui.selected).addClass("ui-selected").siblings().removeClass("ui-selected");
      //}
    //});


   // $(".card").draggable({
   // revert:"invalid",
   // opacity:0.3,
   //});


});
 
