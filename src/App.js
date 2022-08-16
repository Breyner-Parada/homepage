import React from "react";
import { About, Header, Contact, Skills, Work, Footer } from "./container";
import { Navbar } from "./Components";
import "./App.scss";

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Contact />
      {(width <= 499) ? <Footer /> : ''}
    </div>
  );
}

export default App;
