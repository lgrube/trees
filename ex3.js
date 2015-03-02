function getMin() {
	var current = this.root;
	while (current.left !== null) {
		current = current.left;
	}
	return current.data;
}

current.left = null;

function getMax() {
	var current = this.root;
	while (current.right !== null)current = current.right;
}
return current.data;
}
{
				var nums = new BST();
				nums.insert(23);
				nums.insert(45);
				nums.insert(16);
				nums.insert(37);
				nums.insert(3);
				nums.insert(99);
				nums.insert(22);
				var min = nums.getMin();

print("The minimum value of the BST is: " + min);
print("\n");
var max = nums.getMax();
print("The maximum value of the BST is: " + max);

