import { Provider } from "react-redux";
import "./App.css";
// import Counter from "./Redux_Toolkit/Counter";
// import store from "./Redux_Toolkit/Redux_Toolkit_Store";
import ToDoComponent from "./To-Do-List/ToDoComponent";
import ToDoStore from "./To-Do-List/ToDoStore";

function App() {
  return (
    <Provider store={ToDoStore}>
      {/* <Counter /> */}
      
      <ToDoComponent />
    </Provider>
  );
}

export default App;
