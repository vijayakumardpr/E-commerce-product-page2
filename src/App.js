import Header from "./components/Header";
import Main from "./components/Main";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <div className="md:flex flex-col items-center ">
      <Provider store={store}>
        <Header />
        <Main />
      </Provider>
    </div>
  );
}

export default App;
