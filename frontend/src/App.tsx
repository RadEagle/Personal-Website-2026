import { useEffect } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { ViteNextSteps } from "./Components/Vite";

function App() {
  // set the title of the page
  useEffect(() => {
    document.title = "Jon's Homepage";
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <ViteNextSteps />
    </>
  );
}

export default App;
