const {
  Stack,
  Queue
} = require('./main.js')

let stack;

beforeEach(() => {
  stack = Stack();
  queue = Queue();
})

describe('Stack', () => {
  it(`returns an object`, () => {
    expect(typeof stack).toBe('object')
  })

  it(`has an items property that holds an empty array`, () => {
    expect(Array.isArray(stack.items)).toBe(true);
    expect(stack.items.length).toBe(0);
  })

  it(`has an add method that puts an item at the end of the stack without affecting any other items`, () => {
    stack.add('Colin')
    expect(stack.items[0]).toBe('Colin')
    stack.add('Mess')
    stack.add('JD')
    stack.add('Ginny')
    expect(stack.items[0]).toBe('Colin')
    expect(stack.items[3]).toBe('Ginny')
  })

  it(`has a remove function that removes and returns from the top of the stack`, () => {
    stack.items = ['Colin', 'Mess', 'JD', 'Ginny'];
    expect(stack.remove()).toBe('Ginny')
    expect(stack.remove()).toBe('JD')
    expect(stack.remove()).toBe('Mess')
    expect(stack.remove()).toBe('Colin')
  })

  it(`has a peek function that returns the item on the top of stack without removing it`, () => {
    stack.items = ['Colin', 'Mess', 'JD'];
    expect(stack.peek()).toBe('JD')
    stack.items.push('Ginny');
    expect(stack.peek()).toBe('Ginny')
  })
})

describe('Queue', () => {
  it(`returns an object`, () => {
    expect(typeof queue).toBe('object');
  })

  it(`has an items array that begins empty`, () => {
    expect(Array.isArray(queue.items)).toBe(true);
    expect(queue.items.length).toBe(0);
  })

  it(`has an add method that adds an to the back of the queue`, () => {
    queue.add('Colin');
    expect(queue.items[0]).toBe('Colin')
    queue.add('Mesuara');
    queue.add('JD');
    expect(queue.items[0]).toBe('Colin')
    expect(queue.items[2]).toBe('JD')
  })

  it(`has a remove method that removes and returns from the front of the queue`, () => {
    queue.items = ['Colin', 'JD', 'Mesuara'];
    const nextInLine = queue.remove();
    expect(nextInLine).toBe('Colin')
    expect(queue.items[0]).toBe('JD')
    expect(queue.items[1]).toBe('Mesuara')
  })

  it(`has a peek method that returns but does not remove the next in line`, () => {
    queue.items = ['Colin'];
    expect(queue.peek()).toBe('Colin')
    queue.items.push('JD');
    queue.items.push('Mesuara');
    expect(queue.peek()).toBe('Colin')
  })
})
