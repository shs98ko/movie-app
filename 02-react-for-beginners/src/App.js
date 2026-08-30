import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo == "") {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    setTodo("");
    console.log(toDo);
  };
  console.log(toDos);

  return (
    <div className="App">
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your todo..."
        />
        <button>Add To do</button>
      </form>
    </div>
  );
}

export default App;
