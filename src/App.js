import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/greet_component/Greet";
import BasicForm from "./components/BasicForm";
import Counter from "./components/hooks_example/Counter";
import CounterReducer from "./components/hooks_example/CounterReducer";
import ParentComponent from "./components/hooks_example/performance_ex/ParentComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
