import { Provider } from "react-redux";
import "./App.css";
import Counter from "./Redux_Toolkit/Counter";
import store from "./Redux_Toolkit/Redux_Toolkit_Store";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
