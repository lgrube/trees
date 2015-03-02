function Node(data, left, right) {
 this.data = data; // creates data
 this.left = left; // left movement
 this.right = right; // right movement
 this.show = show; // shows the node your on
} // end of node
function show() {
 return this.data; // shows what node you are on
} // end of show

function BST() {
 this.root = null;
 this.insert = insert;
 this.inOrder = inOrder;
 this.preOrder = preOrder;
 this.postOrder = postOrder;
 } // end of BST

function insert(data) {
 var n = new Node(data, null, null);
 if (this.root === null) {
   this.root = n;
   } // end of first if
 else {
   var current = this.root;
   var parent;
   while (true) {
     parent = current;
     if (data < current.data) { // test if data is less than current data
       current = current.left; // moves current left one space
       if (current === null) {
         parent.left = n; // test os n = the a child on the left
         break;
         } // end of third if
     } // end of second if
   else {
     current = current.right; // same as aboce just checks right
     if (current === null) {
       parent.right = n;
       break;
       } // end of if
     } //end of second else
   } // end of while
 }// end of else
} // end of insert

function getSmallest(node) {
	if(node.left == null) {
		return node;
	}
	else {
		return getSmallest(node.left);
	}
}

