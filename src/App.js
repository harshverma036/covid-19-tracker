import { BrowserRouter as Router, Route } from "react-router-dom";
import AppBar from "./components/Appbar";
import Footer from "./components/Footer";
import GlobalDataScreen from "./screens/GlobalDataScreen";
import CountryWiseDataScreen from "./screens/CountryWiseDataScreen";
import CountryDataScreen from "./screens/CountryDataScreen";

function App() {
  return (
    <Router>
      <AppBar />
      <Route path="/country/all" component={CountryWiseDataScreen} />
      <Route path="/country" component={CountryDataScreen} exact />
      <Route path="/" component={GlobalDataScreen} exact />
      <Footer />
    </Router>
  );
}

export default App;
