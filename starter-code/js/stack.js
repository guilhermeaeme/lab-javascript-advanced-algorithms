var stack = new StackDataStructure();

stack.MAX_SIZE = 8;

$(function(){
	var $input_text = $('#input-text');

	$('#form').submit(function(e){
		e.preventDefault();

		var value = $input_text.val();

		if(!value) return;

		$input_text.val('');

		var result = stack.push(value);

		$('#item-overflow, #item-underflow').addClass('hidden');
		$('#item-take').html('');

		if(Array.isArray(result)) {
			$('.item')
				.removeClass('active')
				.html('&nbsp;')

			stack.stackControl.forEach(function(item, index){
				$('#item-' + (index + 1))
					.addClass('active')
					.html(item)
			});
		} else {
			$('#item-overflow').removeClass('hidden');
		}
	});

	$('#btn-take').click(function(e){
		e.preventDefault();

		var result = stack.pop(stack.stackControl[stack.stackControl.length-1]);

		$('#item-overflow, #item-underflow').addClass('hidden');
		$('#item-take').html('');

		$('.item')
			.removeClass('active')
			.html('&nbsp;')

		stack.stackControl.forEach(function(item, index){
			$('#item-' + (index + 1))
				.addClass('active')
				.html(item)
		});

		if(result == 'Stack Underflow') {
			$('#item-underflow').removeClass('hidden');
		} else {
			$('#item-take').html(result);
		}
	});
});
