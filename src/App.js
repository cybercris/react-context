import CountProvider from "./Context/Count";
import { Counter } from "./components/Counter";
import { Mirror } from "./components/Mirror";

function App() {
  return (
    <div className="App">
      <CountProvider>
        <Counter />

        <hr />

        <Mirror />
      </CountProvider>
    </div>
  );
}

export default App;
