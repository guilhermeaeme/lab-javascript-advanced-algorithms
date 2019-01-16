var stack = new StackDataStructure();

stack.MAX_SIZE = 8;

$(function(){
	var $input_stack = $('#input-stack');

	$('#stack-form').submit(function(e){
		e.preventDefault();

		var value = $input_stack.val();

		if(!value) return;

		$input_stack.val('');

		var result = stack.push(value);

		$('#stack-item-overflow, #stack-item-underflow').addClass('hidden');
		$('#stack-item-take').html('');

		if(Array.isArray(result)) {
			$('#stack .item')
				.removeClass('active')
				.html('&nbsp;')

			stack.stackControl.forEach(function(item, index){
				$('#stack-item-' + (index + 1))
					.addClass('active')
					.html(item)
			});
		} else {
			$('#stack-item-overflow').removeClass('hidden');
		}
	});

	$('#stack-btn-take').click(function(e){
		e.preventDefault();

		var result = stack.pop(stack.stackControl[stack.stackControl.length-1]);

		$('#stack-item-overflow, #stack-item-underflow').addClass('hidden');
		$('#stack-item-take').html('');

		$('#stack .item')
			.removeClass('active')
			.html('&nbsp;')

		stack.stackControl.forEach(function(item, index){
			$('#stack-item-' + (index + 1))
				.addClass('active')
				.html(item)
		});

		if(result == 'Stack Underflow') {
			$('#stack-item-underflow').removeClass('hidden');
		} else {
			$('#stack-item-take').html(result);
		}
	});
});
