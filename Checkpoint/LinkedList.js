class LinkedList {
  constructor() {
    this.head = null; // a head to indicate beginning of list, contains  1st node
  }

  // INSERTION
  // can be inserted at beginning of list (insertFirst),
  // this is an O(1) operation bc only inserting at 1 place, first position
  // regardless of length
  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }

  // end of list (insertLast),
  // O(n) operation d/t iterating throughout list
  // create a new node item, 
  // check to see if list is empty then insert new item  as only item in the list; 
  // start at beginning of list then move through list until u reah end of list; 
  // set end node's next pointer to new node
  // new node's next pointer is null, indicating new node is last node on list
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, null)
    }
  }

  // or anywhere in list b/w 2 nodes (insert, insertAt)



  // RETRIEVAL
  find(item) {
    //start at head
    let currNode = this.head
    // if list is empty
    if (!this.head) {
      return null
    }
    // check for item
    while (currNode.value !== item) {
      // return null if it's end of the list and item is not on the list
      if (currNode.next === null) {
        return null;
      }
      else {
        // otherwise keep looking
        currNode = currNode.next;
      }
    }
    // found it
    return currNode
  }


  // REMOVAL 
  // can delete from beginning, end or in between
  remove (item) {
    // if list is empty, return null
    if (!this.head) {
      return null;
    }
    // if node to be removed is head, make next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // start at the head
    let currNode = this.head;
    // keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // save previous node
      previousNode = currNode;
      currNode= currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

module.exports = LinkedList;