import Pages from "./Pages";
import { GiHamburgerMenu } from "react-icons/gi";
import react, { useState } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <div onClick={() => setToggle(!toggle)} className="app__toggle">
        <GiHamburgerMenu />
        <h2>Lorem</h2>
      </div>
      <aside className={` app__navbar ${toggle ? " active" : ""}`}>
        <h2>Lorem Lorem</h2>
        <a>Home</a>
        <a>About</a>
        <a>Services</a>
        <a>Contact Us</a>
        <button className="app__button">Cart</button>
      </aside>
      <section>
        <div className="app__section">
          <div className="app__title">
            <h1>What You Want For Today</h1>
          </div>
          <div className="app__data">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </section>
      <Pages />
    </div>
  );
}

export default App;
