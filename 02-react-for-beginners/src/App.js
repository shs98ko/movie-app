import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((pre) => pre + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // state가 변경된다면 모든 컴포넌트는 re-render가 된다
  // 하지만 처음 rendering할 때,
  // 1번만 rendering시키고 싶은 컴포넌트만 있다면 useEffect를 사용한다.

  // console.log("I run all the time");
  useEffect(() => {
    console.log("CALL THE API... \nI run only one time");
  }, []); //react가 아무것도 지켜보지 않기에 1번만 실행
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]); // react가 'keyword' state value를 지켜보며 'counter'가 변할 때 실행함
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]); // react가 'counter' state value를 지켜보며 'counter'가 변할 때 실행함
  useEffect(() => {
    console.log("I run when'keyword'&'counter' changes");
  }, [keyword, counter]);
  return (
    <div className="App">
      <input
        value={keyword}
        onChange={onChange}
        placeholder="Search for here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}> Click me!</button>
    </div>
  );
}

export default App;
