import "./App.scss";
import NavBar from "./components/Navbar/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container flex">
      <NavBar />
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default App;
