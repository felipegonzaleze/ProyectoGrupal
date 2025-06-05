import "./App.css";

import { Navbar } from "./components/Navbar.jsx";
import { Header } from "./components/Header.jsx";
import { MainContent } from "./components/MainContent.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <MainContent></MainContent>
    </>
  );
}

export default App;
