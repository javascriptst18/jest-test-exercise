beforeEach(() => {
  jest.resetModules();
});

test('returns all todos', () => {
  const todoList = require('../src/todoList');
  expect(todoList.getAllTodos()).toHaveLength(4);
});

test('removes all todos', () => {
  const todoList = require('../src/todoList');
  todoList.removeAllTodos();
  expect(todoList.getAllTodos()).toHaveLength(0);
});

test('adds a new todo', () => {
  const todoList = require('../src/todoList');
  todoList.addTodo('Disrespect the elders');
  expect(todoList.getAllTodos()).toHaveLength(5);
});

test('appends a new todo', () => {
  const todoList = require('../src/todoList');
  const todo = 'Disrespect the elders'
  todoList.addTodo(todo);
  expect(todoList.getAllTodos().pop()).toEqual(todo);
})

test('removes a todo', () => {
  const todoList = require('../src/todoList');
  todoList.removeTodo(1);
  expect(todoList.getAllTodos()).toHaveLength(3);
});

test('updates a todo', () => {
  const todoList = require('../src/todoList');
  const oldTodoValue = 'Listen to punk rock music fresh tunes';
  const newTodoValue = 'I am updated!';
  expect(todoList.getAllTodos()[0]).toEqual(oldTodoValue);
  todoList.editTodo(newTodoValue, 0);
  expect(todoList.getAllTodos()[0]).toEqual(newTodoValue);
});

test('throws error when trying to remove an undefined item', () => {
  const todoList = require('../src/todoList');
  todoList.removeAllTodos();
  expect(todoList.getAllTodos()).toHaveLength(0);
  expect(() => {
    todoList.removeTodo(2);
  }).toThrowError('That item does not exists!');
});

test('throws error when no items left', () => {
  const todoList = require('../src/todoList');
  todoList.removeAllTodos();
  expect(todoList.getAllTodos()).toHaveLength(0);
  expect(() => {
    todoList.removeTodo(0);
  }).toThrow();
});

test('throws error when trying to edit an undefined todo', () => {
  const todoList = require('../src/todoList');
  todoList.removeAllTodos();
  expect(todoList.getAllTodos()).toHaveLength(0);
  expect(() => {
    todoList.editTodo('New content', 3);
  }).toThrow();
});w