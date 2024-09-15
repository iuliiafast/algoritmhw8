class Stack {
  constructor() {
    this.stack = [];
  }

  empty() {
    return this.stack.length === 0;
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.empty()) {
      console.log("Стек пуст, нечего удалять");
      return null;
    }
    return this.stack.pop();
  }

  peek() {
    if (this.empty()) {
      console.log("Стек пуст");
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  search(element) {
    const position = this.stack.lastIndexOf(element);
    if (position === -1) {
      return -1;
    }
    return this.stack.length - 1 - position;
  }

  printStack() {
    console.log("Содержимое стека: " + this.stack.join(", "));
  }
}

const myStack = new Stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);

myStack.printStack();

console.log("Верхний элемент стека (peek): " + myStack.peek());
console.log("Удаление верхнего элемента (pop): " + myStack.pop());
myStack.printStack();

console.log("Позиция элемента 20: " + myStack.search(20));
console.log("Позиция элемента 50: " + myStack.search(50));

console.log("Стек пуст: " + myStack.empty());

myStack.pop();
myStack.pop();
myStack.pop();
console.log("Стек пуст: " + myStack.empty()); 
