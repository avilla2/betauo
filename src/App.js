import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Footer from './components/footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CONTENT_PAGE_QUERY from "./queries/content-page-query";
import Query from "./components/query";
import ContentPage from './pages/content-page';

const theme = createTheme({
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
  typography: {
    fontFamily: [
      '"Poppins"',
      'sans-serif',
      '"Segoe UI"',
      'Roboto',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
        <Navbar />
          <Route path="/" exact component={Home} />
          <Query query={CONTENT_PAGE_QUERY}>
            {({ data: { contentPages } }) => {
                return (
                    <div>
                      {contentPages.map((item, key) => (
                        <Route key={key} path={item.Link} exact render={(props) => (
                          <ContentPage {...props} />
                        )} />) )}
                    </div>
                  ); 
            }}
          </Query>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
