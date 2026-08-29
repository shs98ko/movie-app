import { useState, useEffect } from "react";

const Hello = () => {
  // Hello 컴포넌트는 현재 showing에 따라 삭제, 생성을 반복한다.
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, []);

  //byFn = cleanup function
  /* function byFn() {
    console.log("destroyed :(");
  }
  function hiFn() {
    console.log("created :)");
    return byFn;
  }
  useEffect(hiFn, []); */

  return <h1>Hello</h1>;
};

function App() {
  const [showing, setShowing] = useState(false);
  const onChange = () => setShowing((prev) => !prev);

  return (
    <div className="App">
      {showing ? <Hello /> : null}
      <button onClick={onChange}> {showing ? "hide" : "show"} </button>
    </div>
  );
}

export default App;
