import React, {useState} from 'react';
import Header from './components/Header';
import Contents from './components/Contents';
import styles from './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  // Add 버튼 클릭 핸들러
  const handleCreate = text => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false
      }
    ]);
  };

  // delete 버튼 클릭 핸들러
  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // completed Toggle 클릭 핸들러
  const handleToggle = id => {
    setTodos(
      todos.map(todo =>
          todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    )
  }

  return (
    <div>
      <Header onChange={handleCreate}/>
      <Contents todos={todos} 
      onDelete={handleDelete}
      onToggle={handleToggle}
      />
    </div>
    )
}

export default App;
