import "./App.scss";
import Master from "./component/HOC/Master";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="app-container">
      <Router>
        <Master></Master>
      </Router>
    </div>
  );
}

export default App;
