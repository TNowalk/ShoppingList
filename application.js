$(document).ready(function(){

// use enter to add list items
	$('#item').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#add').click();
		}
	});	

//add list items
	$('#add').click(function(){
		var txtbox = document.getElementById('item');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!$.trim($('#item').val())) {
			alert('Please enter text to add to the list');
		} else {
			$('<li></li>').appendTo('#list').html('<div class="box"></div><span>' + txtval + '</span><img class="delete" src="images/delete.png"/>');

		document.getElementById('item').value = '';
		};
	});

//cross off list items
	$('#list li .box').click(function() {
		event.preventDefault();
		$(this).toggleClass('Checked');
		$(this).closest('li').toggleClass('strike');
	});			
	

//delete list items
	$('#list li .delete').click(function(){
		event.preventDefault();
		$(this).closest('li').remove();
	});


//show delete button on mouse hover

//	$('#list li .delete').hide();

//	$('#list li').mouseenter(function(){
//		$(this).closest('.delete').show();
//	});

//	$('#list li').mouseleave(function(){
//		$(this).closest('.delete').hide();
//	});

});


