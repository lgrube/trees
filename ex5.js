function remove(data) {
	root = removeNode(this.root, data);
}
function}
removeNode(node, data) {
	if (node === null) {
		return null;
	}
	if (data == node.data) {
		 //node has no children
		 if (node.left === null && node.right ===return null;
		 }
		 // node has no left child
		 if (node.left === null) {
	 return node.right;
		 }
		 // node has no right child
		 if (node.right === null) {
		 return node.left;
		 }
		 // node has two children
		 var tempNode = getSmallest(node.right);
	 node.data = tempNode.data;
		 node.right = this.removeNode(node.right,return node;
		 }
		 else if (data < node.data) {
		 node.left = this.removeNode(node.left, data);
		 return node;
		 }
		 else {
		 node.right = this.removeNode(node.right,return node;
		 }
		 null) {
		 tempNode.data);
		 data);
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

