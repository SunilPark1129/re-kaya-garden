import "./App.css";
import "./pages/page.css";

import { Navbar, Footer } from "./components/index";
import { Home, About, Location, Menu } from "./pages/index";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Menu />
        <About />
        <Location />
      </main>
      <Footer />
    </>
  );
}

export default App;
