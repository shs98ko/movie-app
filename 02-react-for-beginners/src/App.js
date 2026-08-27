import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((pre) => pre + 1);
  // state가 변경된다면 모든 컴포넌트는 re-render가 된다
  // 하지만 처음 rendering할 때,
  // 1번만 rendering시키고 싶은 컴포넌트만 있다면 useEffect를 사용한다.

  console.log("I run all the time");
  useEffect(() => {
    console.log("CALL THE API... \nI run only one time");
  }, []);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={onClick}> Click me!</button>
    </div>
  );
}

export default App;
