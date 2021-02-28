import "./App.css";
import Main from "./compornents/Main.js";
import Header from "./compornents/Header.js";
import Footer from "./compornents/Footer.js";

const App = () => {
  const json = {
    name: "佐藤",
    age: "60",
  };
  return (
    <div className="App">
      <Header />
      <Main name="田中" age="30" data={json} />
      <Footer />
    </div>
  );
};

export default App;
