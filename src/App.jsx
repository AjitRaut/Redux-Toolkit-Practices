import { Provider } from "react-redux";
import "./App.css";
// import Counter from "./Redux_Toolkit/Counter";
// import store from "./Redux_Toolkit/Redux_Toolkit_Store";
import ToDoComponent from "./To-Do-List/ToDoComponent";
import ToDoStore from "./To-Do-List/ToDoStore";
import Login_C0mponent from "./Authentication_Flow/Login_C0mponent";
import store from "./Authentication_Flow/Authentication_Flow_Store";
import Main from "./Authentication_Flow/Main";
import Mock_data from "./Mock_Api/Mock_data";


function App() {
  return (
    <Provider store={store}>
      {/* <Counter /> */}
      
      {/* <ToDoComponent /> */}
     {/* <Main /> */}
     <Mock_data />
    </Provider>
  );
}

export default App;
