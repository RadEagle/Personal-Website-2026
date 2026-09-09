import { useEffect } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { Footer } from "./Components/Footer";

const App = () => {
  // set the title of the page
  useEffect(() => {
    document.title = "Jon's Homepage";
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export default App;
