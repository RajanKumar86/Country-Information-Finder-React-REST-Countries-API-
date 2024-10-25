import "./App.css";
import Body from "./components/Body/Body";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <NavBar />
        <Body />
      </main>
    </>
  );
};

export default App;
