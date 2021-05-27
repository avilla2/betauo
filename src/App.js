import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Footer from './components/footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Beta Blue
      main: "#002f6c",
    },
    secondary: {
      // Beta Metallic Gold
      main: "#872",
    },
    info: {
      // Beta Gray
      main: "#D9D9D6",
    },
    // Beta Red
    success: {
      main: "#0085CA",
    },
    warning: {
      main: "#AB2328",
    },
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Router>
          <Route path="/" exact component={Home} />
        </Router>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
