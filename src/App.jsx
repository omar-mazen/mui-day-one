import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Nav from "./components/Nav";
import "./index.css";
import HeroSection from "./components/HeroSection";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Connect from "./components/Connect";
function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Main />
      <Connect />
      <Footer />
    </>
  );
}

export default App;
