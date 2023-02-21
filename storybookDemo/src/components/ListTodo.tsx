import React, { useMemo } from 'react';
import { filterTodo } from './Utils';

interface Todos {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  todos: Todos[];
  theme: string;
  tab: 'all' | 'active' | 'completed';
}

function TodoList({ todos, tab, theme }: Props) {
  const visibleTodos = useMemo(() => filterTodo(todos, tab), [todos, tab]);

  return (
    <div className={theme}>
      <p>
        <b>
          Note:
          <code>filterTodos</code>
          is artificially slowed down!
        </b>
      </p>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed
              ? <s>{todo.text}</s>
              : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
