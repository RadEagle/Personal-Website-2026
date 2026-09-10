import { type Metadata } from "next";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import "../index.css";

export const metadata: Metadata = {
  title: "Jon's Homepage",
  icons: "/favicon.svg",
};

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default App;
