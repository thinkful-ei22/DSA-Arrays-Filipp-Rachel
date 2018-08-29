const Memory = require('./memory');

const memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }
  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }
}

function main() {

  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();

  //add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  arr.pop();
  arr.pop();
  arr.pop();

  arr.remove(0);
  arr.remove(0);
  arr.remove(0);

  arr.push('tauhida');

  console.log(arr);
  console.log(arr.get(0));

}

main();

// 1. What is the length, capacity and memory address of your array?
// Array { length: 1, _capacity: 3, ptr: 0 }

// 2. What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code
// Array { length: 6, _capacity: 12, ptr: 3 } 
// the capaticy changed because we hit the limit, so our pointer changed to point to the new address.

// 3. What is the length, capacity and address of your array? Explain the result of your program after adding the new lines of code
// Array { length: 3, _capacity: 12, ptr: 3 }
// the capacity is 12 because be increased the capaticy previously. But the length is 3 because we removed 3 items.

// 4. Print this one item that you just added. What is the result? Can you explain your result?
// NaN
