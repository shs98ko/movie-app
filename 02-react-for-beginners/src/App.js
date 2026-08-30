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
        <hr />
        <ul>
          {toDos.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}
// map
// array = ['1','2','3','4','5']
// array.map(()=>"a"); 배열 안의 원소 5개 전부 'a'로 바꾼다.
// =>array= ['a','a','a','a','a']
// array.map((item)=>item+'s')
// =>array= ['as','as','as','as','as']
export default App;
