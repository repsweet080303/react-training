import React from 'react';

interface Todos {
  id: number;
  text: string;
  completed: boolean;
}

type ListTodo = Todos[];

const createTodo = () => {
  const todos = [];
  for (let i = 0; i < 30; i += 1) {
    todos.push({
      id: i,
      text: `todo ${i + 1}`,
      completed: Math.random() > 0.5,
    });
  }
  return todos;
};

function filterTodo(todos: ListTodo, tab: 'all' | 'active' | 'completed') {
  console.log(`[ARTIFICIALLY SLOW] Filtering ${todos.length} todos for ${tab} tab.`);

  return todos.filter((todo) => {
    if (tab === 'all') {
      return true;
    } if (tab === 'active') {
      return !todo.completed;
    } if (tab === 'completed') {
      return todo.completed;
    }
    return '';
  });
}

export { createTodo, filterTodo };
