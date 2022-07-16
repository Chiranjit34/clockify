import "./App.css";
import { Todo } from "./Components/Todo";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div style={{padding:"20px"}}>
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
