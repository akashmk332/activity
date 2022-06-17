document.write(
  "Q2. Reverse a linked list in groups of given size:" + "<br><br>"
);

// Javascript program to reverse a
// linked list in groups of
// given size
var head1; // head of list

/* Linked list Node */
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function reverse(head1, k1) {
  if (head1 == null) return null;
  var current = head1;
  var next = null;
  var prev = null;

  var count = 0;

  /* Reverse first k nodes of linked list */
  while (count < k1 && current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count++;
  }

  /*
		next is now a pointer to (k+1)th node
		Recursively call for the list starting
		from current. And make rest of the list
		as next of first node
		*/
  if (next != null) head1.next = reverse(next, k1);

  // prev is now head of input list
  return prev;
}

/* Utility functions */

/* Inserts a new Node at front of the list. */
function push(new_data) {
  /*
		1 & 2: Allocate the Node & Put in the data
		*/
  new_node = new Node(new_data);

  /* 3. Make next of new Node as head */
  new_node.next = head1;

  /* 4. Move the head to point to new Node */
  head1 = new_node;
}

/* Function to print linked list */
function printList() {
  temp = head1;
  while (temp != null) {
    document.write(temp.data + " ");
    temp = temp.next;
  }
  document.write("<br/>");
}

/* Driver program to test above functions */

/*
		Constructed Linked List is
		1->2->3->4->5->6-> 7->8->8->9->null
		*/
push(9);
push(8);
push(7);
push(6);
push(5);
push(4);
push(3);
push(2);
push(1);

document.write("Given Linked List<br/>");
printList();
document.write("<br>");
let k1 = 3;

head1 = reverse(head1, k1);
document.write(
  "Given size of the Linked List will reversed:" + "\n" + k1 + "<br><br>"
);
document.write("Reversed list<br/>");
printList();
