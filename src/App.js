import React from "react";
import Main from "./components/MainComponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/ConfigureStore";

const store = ConfigureStore();

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Main />
      </Provider>
    </React.Fragment>
  );
}

export default App;
console.log(store);
