document.write(
  "Q3. Merge a linked list into another linked list at alternate positions.:" +
    "<br><br>"
);

// Javascript program to merge a linked list into another at
// alternate positions

// A nexted list node
class Node1 {
  constructor() {
    this.data = 0;
    this.next = null;
  }
}

/* Function to insert a node at the beginning */
function push(head2_ref, new_data) {
  var new_node1 = new Node1();
  new_node1.data = new_data;
  new_node1.next = head2_ref;
  head2_ref = new_node1;
  return head2_ref;
}

/* Utility function to print a singly linked list */
function printList(head2) {
  var temp = head2;
  while (temp != null) {
    document.write(temp.data + " ");
    temp = temp.next;
  }
  document.write("<br>");
}

// Main function that inserts nodes of linked list q into p at
// alternate positions. Since head of first list never changes
// and head of second list may change, we need single pointer
// for first list and double pointer for second list.
function merge(p, q) {
  var p_curr = p,
    q_curr = q;
  var p_next, q_next;

  // While there are available positions in p
  while (p_curr != null && q_curr != null) {
    // Save next pointers
    p_next = p_curr.next;
    q_next = q_curr.next;

    // Make q_curr as next of p_curr
    q_curr.next = p_next; // Change next pointer of q_curr
    p_curr.next = q_curr; // Change next pointer of p_curr

    // Update current pointers for next iteration
    p_curr = p_next;
    q_curr = q_next;
  }

  q = q_curr; // Update head pointer of second list
  return q;
}

// Driver code
var p = null,
  q = null;
p = push(p, 3);
p = push(p, 2);
p = push(p, 1);
document.write("First Linked List:<br>");
printList(p);
q = push(q, 8);
q = push(q, 7);
q = push(q, 6);
q = push(q, 5);
q = push(q, 4);
document.write("Second Linked List:<br>");
printList(q);
q = merge(p, q);
document.write("Modified First Linked List:<br>");
printList(p);
document.write("Modified Second Linked List:<br>");
printList(q);
