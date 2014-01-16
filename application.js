$(document).ready(function(){

	$('#item').keyup(function(event){
		if(event.keyCode == 13) {
			$('button').click();
		}
	});	

	$('button').click(function(){
		var txtbox = document.getElementById('item');
		var txtval = txtbox.value;
		$('#list').append('<li>' + txtval + '</li>');
		document.getElementById('item').value = '';
	});

	$('.delete').hide();

	$('#list li').mouseenter(function(){
		$('#list li .delete').show();
	});

	$('#list li').mouseleave(function(){
		$('#list li .delete').hide();
	});

});

//comment
