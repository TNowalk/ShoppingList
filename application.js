$(document).ready(function(){

// use enter to add list items
	$('#item').keyup(function(event){
		if(event.keyCode == 13) {
			$('#add').click();
		}
	});	

//add list items


	$('#add').click(function(){
		var txtbox = document.getElementById('item');
		var txtval = txtbox.value;		
		$('<li></li>').appendTo('#list').html('<div class="box"></div><span>' + txtval + '</span><img class="delete" src="images/delete.png"/>');

		document.getElementById('item').value = '';
	});

//cross off list items
	$('#list li .box').on("click", check);

	function check() {
		$(this).css('background-image', 'url("images/boxChecked.png")');
		$(this).closest('li').css('text-decoration', 'line-through');
		$(this).click(function(){
			$(this).css('background-image', 'url("images/box.png")');
			$(this).closest('li').css('text-decoration', 'none');
		});
	}			
	

//delete list items
	$('#list li .delete').click(function(){
		$(this).closest('li').remove();
	});


//show delete button on mouse hover

//	$('#list li .delete').hide();

//	$('#list li').mouseenter(function(){
//		$(this).closest('img.delete').show();
//	});

//	$('#list li').mouseleave(function(){
//		$(this).closest('img.delete').hide();
//	});

});


