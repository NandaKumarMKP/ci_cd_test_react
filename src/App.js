import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CounterUseMemo from "./components/hooks_example/use_memo_ex/CounterUseMemo";

function App() {
  return (
    <div className="App">
      {/* <ToastContainer /> */}
      {/* <Greet /> */}
      {/* <BasicForm />
      <Counter />
      <CounterReducer /> */}
      {/* <ParentComponent /> */}
      <CounterUseMemo />
    </div>
  );
}

export default App;
