var queue = new QueueDataStructure();

queue.MAX_SIZE = 8;

$(function(){
	var $input_queue = $('#input-queue');

	$('#queue-form').submit(function(e){
		e.preventDefault();

		var value = $input_queue.val();

		if(!value) return;

		$input_queue.val('');

		var result = queue.enqueue(value);

		$('#queue-item-overflow, #queue-item-underflow').addClass('hidden');
		$('#queue-item-take').html('');

		if(Array.isArray(result)) {
			$('#queue .item')
				.removeClass('active')
				.html('&nbsp;')

			queue.queueControl.forEach(function(item, index){
				$('#queue-item-' + (index + 1))
					.addClass('active')
					.html(item)
			});
		} else {
			$('#queue-item-overflow').removeClass('hidden');
		}
	});

	$('#queue-btn-take').click(function(e){
		e.preventDefault();

		var result = queue.queue();

		$('#queue-item-overflow, #queue-item-underflow').addClass('hidden');
		$('#queue-item-take').html('');

		$('#queue .item')
			.removeClass('active')
			.html('&nbsp;')

		queue.queueControl.forEach(function(item, index){
			$('#queue-item-' + (index + 1))
				.addClass('active')
				.html(item)
		});

		if(result == 'Queue Underflow') {
			$('#queue-item-underflow').removeClass('hidden');
		} else {
			$('#queue-item-take').html(result);
		}
	});
});
