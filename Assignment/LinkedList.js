// const _Node = require('./Node')

// class LinkedList {
//   constructor() {
//     this.head = null
//   }

//   insertFirst(item) {
//     this.head = new _Node(item, this.head)
//   }

//   insertLast(item) {
//     if (this.head === null) {
//       this.insertFirst(item)
//     }
//     else {
//       let tempNode = this.head
//       while (tempNode.next !== null) {
//         tempNode = tempNode.next
//       }
//       tempNode.next = new _Node(item, null)
//     }
//   }

//   insertBefore(insertItem, value) {
//     let currNode = this.head
//     while(value !== currNode.next.value) {
//       currNode = currNode.next
//     }
//     let findValue = this.find(value)

//     currNode.next = new _Node(insertItem, findValue)
//   }

//   insertAfter(insertItem, value) {
//     let findValue = this.find(value)
//     let tempNext = findValue.next
//     findValue.next = new _Node(insertItem, tempNext)
//   }

//   insertAt(insertItem, position) {
//     let currNode = this.head
//     let count = 0
//     while (currNode.next !== null) {
//       count++
//       if (count === position) {
//         this.insertBefore(insertItem, currNode.value)
//       }
//       currNode = currNode.next
//     }
//   }

//   find(item) {
//     let currNode = this.head;
//     if (!this.head) {
//       return null
//     }
//     while (currNode.value !== item) {
//       if (currNode.next === null) {
//         return null
//       }
//       else {
//         currNode = currNode.next
//       }
//     }
//     return currNode
//   }

//   remove(item) {
//     if (!this.head) {
//       return null
//     }
//     if (this.head.value === item) {
//       this.head = this.head.next
//       return 
//     }
//     let currNode = this.head
//     let previousNode = this.head
    
//     while ((currNode !== null) && (currNode.value !== item)) {
//       previousNode = currNode
//       currNode = currNode.next
//     }
//     if (currNode === null) {
//       console.log('Item not found')
//       return
//     }
//     previousNode.next = currNode.next
//   } 

// }


// const SLL = new LinkedList();

// function main() {
//   SLL.insertFirst('Apollo');
//   SLL.insertFirst('Boomer');
//   SLL.insertFirst('Helo');
//   SLL.insertFirst('Husker');
//   SLL.insertFirst('Starbuck');
//   SLL.insertFirst('Tauhida')

//   // SLL.insertLast('Boomer')
//   // SLL.insertLast('Helo')
//   // SLL.insertLast('Husker')
//   // SLL.insertLast('Starbuck')
//   // SLL.insertLast('Tauhida')

//   // SLL.find('Husker')

//   // SLL.remove('Husker');
//   //previous is now undefined

//   // SLL.insertBefore('Athena', 'Boomer')
//   // SLL.insertAfter('Hotdog', 'Helo')
//   // SLL.insertAt('Kat', 3)
//   // SLL.remove('Tauhida')

//   // SLL.size()
//   // SLL.display()

//   // console.log(SLL.isEmpty());
//   // console.log(SLL.findPrevious('Apollo'));
//   // console.log(SLL.findLast());
//   // console.log('reverse')
//   // SSL.reverseList();
//   // SSL.display();
//   return SLL
// }

// console.log(main())

// const LL = main()
// // console.log("LL", LL)



// reverseList = () => {
//   let currNode = this.head; // start at the beginning
//   let node = null; // save the previous thing to point at
//   while (currNode!== null) { //[1, 2, 3, 4]
//     let tempNext = currNode.next; //2 //3
//     currNode.next = node;//1 -> null //3
//     node = currNode; //value from null to 1
//     currNode = tempNext; //value from 1 to 2
//   }
//   this.head = node;
// }

// reverseListRecursive = (node) => {
//     // if 0 node in list
//     if (node == null) {
//         return null;
//     }
//     // if 1 node in list
//     if (node.next == null) {
//         return node;
//     }
//     // reverse recursively and link second.next to first 
//     const secondElem = node.next;
//     node.next = null;
//     const reverseRest = reverseList(secondElem);
//     secondElem.next = node;
//     return reverseRest;
// }

// reverseListIterative = (lst) => {
//   // create the list by adding to reversedPart
//   let reversedPart = null;
//   let current = lst.head;
 
//   while(current !== null) {
//     // assign next node to savedNode for safe keeping
//     let savedNode = current.next;
//     // Reassigns current's pointer to the new list we are making
//     // reversedPart starts as null, but slowly grows as things are
//     // pushed onto the new list
//     current.next = reversedPart;
//     reversedPart = current;
//     // update the counter that is traveling through the array
//     current = savedNode;
//   }
//   // update the head so we have access to the linked list
//   lst.head = reversedPart;
//   //displayList(lst);
//   return lst;
// }

// display = () => {
//   let currNode = this.head
//   console.log(this.head, 'head here')
//   while (currNode !== null) {
//     console.log(currNode)
//     currNode = currNode.next
//   }
// }
// console.log('display', display(LL))



// size = () => {
//   let currNode = this.head
//   let counter = 0
//   while (currNode !== null) {
//     counter++
//     currNode = currNode.next
//   }
//   console.log(counter)
//   return counter
// }

// isEmpty = () => {
//   let currNode = this.head
//   if (currNode === null) {
//     return true
//   }
//   return false
// }

// findPrevious = (item) => {
//   let currNode = this.head
//   while (item !==  currNode.next.value) {
//     currNode = currNode.next
//   }
//   return currNode
// }

// findLast = () => {
//   let currNode = this.head
//   while (currNode.next !== null) {
//     currNode = currNode.next
//   }
//   return currNode
// }

// thirdFromEnd = () => {
//   let currNode = this.head
//   while (currNode.next.next.next !== null) {
//     currNode = currNode.next
//   }
//   console.log('third fom end', currNode.value)
//   return currNode
// }

//  middleList = (LL) => {
//   let singleStep = LL.head;
//   let doubleStep = LL.head;
//   console.log('head', LL.head)

//   if (!LL) {
//       return null;
//   }
//   // go through list at twice the speed, so a single speed iteration will end at the halfway point
//   // while (doubleStep !== null) {
//   while (doubleStep && doubleStep.next) {
//     // step twice through list
//     doubleStep = doubleStep.next.next;
//     // console.log('double step', doubleStep)
//     // step once through list
//     singleStep = singleStep.next;
//     // console.log('single step', singleStep)
//   }

//   return singleStep;
// }

// console.log('middle of the list', middleList(LL))


// cycleInAList = () => {
//   let currNode = this.head;
//   let values = [];

//   while (currNode !== null) {
//     if (values.includes(currNode.value)) {
//       return true;
//     }
//     values.push(currNode.value);
//     currNode = currNode.next;
//   }

//   return false;
// }

// module.exports = LinkedList


class _Node {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}
class LinkedList {
  constructor() {
    this.head = null
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item)
    }
    else {
      let tempNode = this.head
      while (tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, null)
    }
  }
}

const SLL = new LinkedList();
function main() {
  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer')
  SLL.insertFirst('Helo')
  SLL.insertFirst('Husker')
  SLL.insertFirst('Starbuck')
  SLL.insertFirst('Tauhida')
  return SLL
}
  const LL = main() 
 middleList = (linkedList) => {
  let singleStep = linkedList.head;
  let doubleStep = linkedList.head;
  if (!linkedList) {
      return null;
  }
    while (doubleStep && doubleStep.next) {      
      doubleStep = doubleStep.next.next;      
      singleStep = singleStep.next;
  }
  return singleStep;
}

// console.log(middleList(LL))

