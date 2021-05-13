import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import AppBar from "./components/Appbar";
import GlobalDataScreen from "./screens/GlobalDataScreen";

function App() {
  return (
    <Router>
      <AppBar />
      <Container maxWidth="lg" style={{ marginTop: 100 }}>
        <Route path="/" component={GlobalDataScreen} exact />
      </Container>
    </Router>
  );
}

export default App;
