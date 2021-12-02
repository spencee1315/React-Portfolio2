import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Social from "./components/Social";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route component={About()} path='/' exact />
      <Route component={Portfolio()} path='/portfolio' exact />
      <Route component={Social()} path='/social' exact />
    </Switch>
    <Footer />
    </BrowserRouter>
  )
}

export default App;
