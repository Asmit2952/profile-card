import Header from "./components/Header"
import Link from "./components/Link"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"
import './App.css';

function App() {
  return (
    <div className="card">
        <Header />
        <Link />
        <About />
        <Interests />
        <Footer />
    </div>
  );
}

export default App;
