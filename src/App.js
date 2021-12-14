import "./App.css";
import Routes from "./Routes";
import Store from "./Store/Store";

function App() {
  return (
    <Store>
      <Routes />
    </Store>
  );
}

export default App;
