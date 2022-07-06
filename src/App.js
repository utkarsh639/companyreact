import Header from "./components/header/Header";
import Home from "./components/Gotomenu/Home";
import "./App.css";
import Card from "./components/card/Card";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
