document.write(
  "Q10. Implement a queue using the stack data structure:" + "<br><br>"
);

// Javascript program to implement Queue using
// two stacks
class Queue {
  constructor() {
    this.h1 = [];
    this.h2 = [];
  }

  enQueue(t) {
    // Move all elements from h1 to h2
    while (this.h1.length != 0) {
      this.h2.push(this.h1.pop());
      //h1.pop();
    }

    // Push item into h1
    this.h1.push(t);

    // Push everything back to h1
    while (this.h2.length != 0) {
      this.h1.push(this.h2.pop());
      //h2.pop();
    }
  }

  // Dequeue an item from the queue
  deQueue() {
    // If first stack is empty
    if (this.h1.length == 0) {
      document.write("Q is Empty");
    }

    // Return top of s1
    let t = this.h1[this.h1.length - 1];
    this.h1.pop();
    return t;
  }
}

// Driver code
let v = new Queue();
v.enQueue(2);
v.enQueue(4);
v.enQueue(6);
v.enQueue(8);
v.enQueue(10);
v.enQueue(12);
document.write("Elements of an queue using the stack:" + "<br><br>");
document.write(v.deQueue() + "<br>");
document.write(v.deQueue() + "<br>");
document.write(v.deQueue() + "<br>");
document.write(v.deQueue() + "<br>");
document.write(v.deQueue() + "<br>");
document.write(v.deQueue() + "<br>");
