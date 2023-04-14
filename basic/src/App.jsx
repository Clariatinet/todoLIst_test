import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [text, setText] = useState('');
  const onChange = (event) => {
    setText(event.target.value);
  };

  const [todoList, setTodoList] = useState([
    {
      id: uuidv4(),
      title: '장미',
      active: false,
    },
    {
      id: uuidv4(),
      title: '튤립',
      active: true,
    },
    {
      id: uuidv4(),
      title: '백합',
      active: false,
    },
  ]);
  const addTodo = () => {
    const todo = {
      id: uuidv4(),
      title: text,
      active: false,
    };
    setTodoList([...todoList, todo]);
    setText('');
  };
  const deleteTodo = (id) => {
    setTodoList(
      todoList.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  return (
    <div>
      <input type='text' value={text} onChange={onChange} />
      <button onClick={addTodo}>추가</button>
      {todoList.map((todo) => {
        return (
          <div>
            {todo.title}
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
