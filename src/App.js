import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Router from "./router/Router";
import './sass/app.scss'
import "./sass/base.scss"
function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__left">
          <Navbar />
        </div>
        <div className="app__right">
          <Header />
          
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
