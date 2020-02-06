/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */
/**
 * Initialize your data structure here.
 */

// var Node = function(val) {
//   this.val = val;
//   this.next = null;
// };

// var MyLinkedList = function() {
//   this.head = null;
//   this.tail = null;
//   this.size = 0;
// };

// /**
//  * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
//  * @param {number} index
//  * @return {number}
//  */
// MyLinkedList.prototype.get = function(index) {
//   if (this.size === 0 || index > this.size - 1 || index < 0) return -1;
//   let curr = this.head;
//   for (let i = 0; i < index; i++) {
//     curr = curr.next;
//   }
//   return curr.val;
// };

// /**
//  * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtHead = function(val) {
//   let newNode = new Node(val);

//   if (!this.head) {
//     this.head = newNode;
//     this.tail = newNode;
//   } else {
//     newNode.next = this.head;
//     this.head = newNode;
//   }
//   this.size++;
//   return this;
// };

// /**
//  * Append a node of value val to the last element of the linked list.
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtTail = function(val) {
//   let newNode = new Node(val);

//   if (!this.head) {
//     this.head = newNode;
//     this.tail = newNode;
//   } else {
//     this.tail.next = newNode;
//     this.tail = newNode;
//   }
//   this.size++;
//   return this;
// };

// /**
//  * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
//  * @param {number} index
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtIndex = function(index, val) {
//   let newNode = new Node(val);
//   if (index > this.size) return;
//   if (index <= 0) {
//     return this.addAtHead(newNode);
//   }
//   if (index === this.size) {
//     return this.addAtTail(newNode);
//   }

//   let curr = this.head;

//   for (let i = 0; i < index; i++) {
//     curr = curr.next;
//   }
//   if (curr.next) {
//     newNode.next = curr.next;
//   } else {
//     newNode.next = null;
//   }
//   curr.next = newNode;
//   this.size++;
//   return this;
// };

// /**
//  * Delete the index-th node in the linked list, if the index is valid.
//  * @param {number} index
//  * @return {void}
//  */
// MyLinkedList.prototype.deleteAtIndex = function(index) {
//   if (index >= this.size || index < 0) return;
//   if (index === 0) {
//     this.head = this.head.next;
//     this.size--;
//     return this;
//   }

//   let cur = this.head;
//   for (let i = 0; i < index - 1; i++) {
//     cur = cur.next;
//   }

//   cur.next = cur.next.next ? cur.next.next : null;
//   if (!cur.next) {
//     this.tail = cur;
//   }
//   this.size--;
//   return this;
// };

// /**
//  * Your MyLinkedList object will be instantiated and called as such:
//  * var obj = new MyLinkedList()
//  * var param_1 = obj.get(index)
//  * obj.addAtHead(val)
//  * obj.addAtTail(val)
//  * obj.addAtIndex(index,val)
//  * obj.deleteAtIndex(index)
//  */

var Node = function(val) {
  this.val = val;
  this.next = null;
};

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  // if (this.size === 0 || index > this.size - 1 || index < 0) return -1;
  // let cur = this.head;

  // for (let i = 0; i < index; i++) {
  //   cur = cur.next;
  // }
  // return cur.val;
  if (this.size === 0 || index > this.size - 1 || index < 0) {
    return -1;
  }
  let curr = this.head;

  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  // const newNode = new Node(val);

  // if (!this.head) {
  //   this.head = newNode;
  //   this.tail = newNode;
  // } else {
  //   newNode.next = this.head;
  //   this.head = newNode;
  // }
  // this.size++;
  // return this;

  const node = new Node(val);

  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;
    this.head = node;
  }
  this.size++;
  return this;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  // const newNode = new Node(val);

  // if (!this.head) {
  //   this.head = newNode;
  //   this.tail = newNode;
  // } else {
  //   this.tail.next = newNode;
  //   this.tail = newNode;
  // }
  // this.size++;
  // return this;

  let node = new Node(val);

  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.size++;
  return this;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  // const newNode = new Node(val);
  // if (index > this.size) return;
  // if (index <= 0) {
  //   return this.addAtHead(val);
  // }
  // if (index === this.size) {
  //   return this.addAtTail(val);
  // }

  // let cur = this.head;
  // for (let i = 0; i < index - 1; i++) {
  //   cur = cur.next;
  // }
  // newNode.next = cur.next ? cur.next : null;
  // cur.next = newNode;
  // this.size++;
  // return this;

  let node = new Node(val);

  if (index > this.size) {
    return;
  }
  if (index <= 0) {
    return this.addAtHead(val);
  }
  if (index === this.size) {
    return this.addAtTail(val);
  }

  let curr = this.head;
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }

  if (curr.next) {
    node.next = curr.next;
  } else {
    node.next = null;
  }
  curr.next = node;
  this.size++;
  return this;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  // if (index >= this.size || index < 0) return;
  // if (index === 0) {
  //   this.head = this.head.next;
  //   this.size--;
  //   return this;
  // }

  // let cur = this.head;
  // for (let i = 0; i < index - 1; i++) {
  //   cur = cur.next;
  // }

  // cur.next = cur.next.next ? cur.next.next : null;
  // if (!cur.next) {
  //   this.tail = cur;
  // }
  // this.size--;
  // return this;

  if (index >= this.size || index < 0) return;
  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return this;
  }

  let curr = this.head;
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next ? curr.next.next : null;
  if (!curr.next) {
    this.tail = curr;
  }
  this.size--;
  return this;
};
