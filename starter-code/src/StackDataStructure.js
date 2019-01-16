function StackDataStructure () {
	this.stackControl = [];
	this.MAX_SIZE = 2;

	this.isEmpty = function() {
		return (this.stackControl.length == 0);
	};

	this.canPush = function() {
		return (this.stackControl.length < this.MAX_SIZE);
	};

	this.pop = function() {
		if(this.stackControl.length == 0) {
			return 'Stack Underflow';
		}

		return this.stackControl.pop();
	};

	this.push = function(item) {
		if(this.canPush()) {
			this.stackControl.push(item);

			return this.stackControl;
		} else {
			return 'Stack Overflow';
		}
	}
}
