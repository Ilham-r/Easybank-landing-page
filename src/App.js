import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Article from "./components/Articles";
import "./styles.css";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Article />
      <Footer />
    </>
  );
}
