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

});
