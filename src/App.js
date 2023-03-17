import "./App.css";
import "./pages/page.css";

import { Navbar, Footer } from "./components/index";
import { Home, About, Location, Menu } from "./pages/index";
import "./components/components.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <div className="wrapper">
          <Menu />
          <About />
          <Location />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
