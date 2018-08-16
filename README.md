# Unit/Integration testing exercise

Skriv enhetstester/integrationstester för denna todo-applikation. Koden som ska testas finns inuti mappen `src`.

Du ska skriva alla dina tester i filen som heter `__tests__/todo.js`. Du får ändra lite på funktionaliteten eller ändra om i koden om det blir lättare att testa. Huvudsaken är att skriva tester.

**Det kan vara en bra idé att rada upp de saker som applikationen ska kunna göra, på detta sätt blir det lättare att se vad som måste testas**
* _I should be able to add a todo_
* _I should be able to remove a todo_
* _I should be able to remove all todos_
* _I should be able to edit a todo_
* _I should be **not** be able to edit a nonexisting todo_


Gör sedan dina **assertions** baserat på dessa punkter.

## Installation

```bash
git clone https://github.com/javascriptst18/testing-exercise
cd unit-test-exercise
yarn #or npm i
```

## Run tests

Single run
```bash
yarn test
```
```bash
npm run test
```

Watch mode
```bash
yarn test:watch
```
```bash
npm run test:watch
```

## Jest syntax

Jag har skrivit ett första test så du kan se hur ett test kan skrivas.
```js
/* So the functionalty is tested in isolation. This means
 * that each new test doesn't know anything about the previous
 * when mutating the state  (the list of todos) it is important
 * that we reset the state after each test */
beforeEach(() => {
  jest.resetModules();
});

test('returns all todos', () => {
  /* require the list for each test to guarantee isolated tests */
  const todoList = require('../src/todoList');
  expect(todoList.getAllTodos()).toHaveLength(4);
});
```

## Solution

Exempel på hur detta kan lösa finns under branchen [`solution`](https://github.com/javascriptst18/testing-exercise/tree/solution)
