import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MainContents from "./compornents/MainContents.js";
import Header from "./compornents/Header.js";
import Footer from "./compornents/Footer.js";
import TestPage from "./TestPage.js";
import NewsPage from "./news/NewsPage.js";
import MoviePage from "./movie/MoviePage.js"

const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <div>
          <p><Link to="/">Main</Link></p>
          <p><Link to="/test">TestPage</Link></p>
          <p><Link to="/news">NewsPage</Link></p>
          <p><Link to="/movie">MoviePage</Link></p>
        </div>

        <div>
          <Route exact path="/" component={MainContents} />
          <Route path="/test" component={TestPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/movie" component={MoviePage} />
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
