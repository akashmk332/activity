document.write(
  "Q1. Delete the elements in an linked list whose sum is equal to zero" +
    "<br><br>"
);
// A Linked List Node
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Function to create Node
function getNode(data) {
  let temp = new ListNode(data);
  temp.next = null;
  return temp;
}

// Function to print the Linked List
function printList(head) {
  document.write("After deliting Remaining Nodes in an list:" + "");
  while (head.next) {
    document.write(head.val, " --> ");
    head = head.next;
  }
  document.write(head.val, "");
}

// Function that removes continuous nodes
// whose sum is K
function removeZeroSum(head, k) {
  // Root node initialise to 0
  let root = new ListNode(0);
  // Append at the front of the given
  // Linked List
  root.next = head;

  // Map to store the sum and reference
  // of the Node
  let umap = new Map();

  umap.set(0, root);

  // To store the sum while traversing
  let sum = 0;

  // Traversing the Linked List
  while (head != null) {
    // Find sum
    sum += head.val;

    // If found value with (sum - K)
    if (umap.has(sum - K) == true) {
      let prev = umap.get(sum - K);
      let start = prev;

      // Delete all the node
      // traverse till current node
      let aux = head;

      // Update sum
      sum = sum - K;
      document.write("Deleted nodes:");
      // Traverse till current head
      while (prev != head) {
        prev = prev.next;
        aux += prev.val;
        if (prev != head) umap.delete(aux);
      }
      document.write(aux, " <br> ");

      // Update the start value to
      // the next value of current head
      start.next = head.next;
    }

    // If (sum - K) value not found
    else umap.set(sum, head);

    head = head.next;
  }

  // Return the value of updated
  // head node
  return root.next;
}

// Driver Code

// Create Linked List
let head = getNode(1);
head.next = getNode(-5);
head.next.next = getNode(4);
head.next.next.next = getNode(5);
head.next.next.next.next = getNode(1);
document.write(
  "Elements in Linkedlist:" + "<br>" + head.val,
  " -> " + "\n",
  head.next.val,
  " -> " + "\n",
  head.next.next.val,
  " -> " + "\n",
  head.next.next.next.val,
  "->" + "\n",
  head.next.next.next.next.val + "<br><br>"
);

// Given sum K
let K = 0;

// Function call to get head node
// of the updated Linked List
head = removeZeroSum(head, K);

// Print the updated Linked List
if (head != null) printList(head);
