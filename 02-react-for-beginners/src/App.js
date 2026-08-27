import Button from "./button";
import styles from "./App.module.css";
//css를 전역이아닌 독립적으로 적용시킬수 있음

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
