beforeEach(() => {
  jest.resetModules();
});

test('returns all todos', () => {
  const todoList = require('../src/todoList');
  expect(todoList.getAllTodos()).toHaveLength(4);
});

test('should empty array', () => {
  // Guarantees a fresh todo list
  const todoList = require('../src/todoList');
  todoList.removeAllTodos(); // Doesn't return 
  expect(todoList.todos).toHaveLength(0);
});
