import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Marketplace Clínica Imperial</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/detalle">Deta</Link> |{" "}
        <Link to="/checkout">Check</Link>
      </nav>
    </div>
  );
}

export default App;