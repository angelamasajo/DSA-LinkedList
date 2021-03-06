const LinkedList = require('./LinkedList');

const SLL = new LinkedList();

function main() {
  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');

  SLL.remove('Husker');
  //previous is now undefined

  SLL.insertBefore('Athena', 'Boomer')
  SLL.insertAfter('Hotdog', 'Helo')
  SLL.insertAt('Kat', 3)
  SLL.remove('Tauhida')

  SLL.size()
  SLL.display()

  console.log(SLL.isEmpty());
  console.log(SLL.findPrevious('Apollo'));
  console.log(SLL.findLast());
  console.log('reverse')
  SSL.reverseList();
  SSL.display();
  console.log(SLL)
}

main()