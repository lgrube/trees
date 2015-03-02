function find(data) {
	var current = this.root;
	while (current && current.dataif (data < current.data !=data) {
		if (data < current.data) {
		current = current.left;
	}
	else {
		current = current.right;
	}
	}
	return current;
	}

load("bst.js");
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
inOrder(nums.root);
	print("\n");
	putstr("Enter a value to search for: ");
	var value = parseInt(readline());
	var found = nums.find(value);
	if (found !== null) {
		print("Found " + value + " in the BST.");
	}
else {
	print(value + " was not found in the BST.");
}

