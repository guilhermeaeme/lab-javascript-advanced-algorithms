function QueueDataStructure () {
	this.queueControl = [];
	this.MAX_SIZE = 2;

	this.isEmpty = function() {
		return (this.queueControl.length == 0);
	};

	this.canEnqueue = function() {
		return (this.queueControl.length < this.MAX_SIZE);
	};

	this.queue = function() {
		if(this.queueControl.length == 0) {
			return 'Queue Underflow';
		}

		return this.queueControl.pop();
	};

	this.enqueue = function(item) {
		if(this.canEnqueue()) {
			this.queueControl.unshift(item);

			return this.queueControl;
		} else {
			return 'Queue Overflow';
		}
	};

	this.dequeue = function() {
		if(this.queueControl.length == 0) {
			return 'Queue Underflow';
		}

		return this.queueControl[this.queueControl.length - 1];
	}
}
