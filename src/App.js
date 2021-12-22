import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './pageElements/navbar';
import Footer from './pageElements/footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CONTENT_PAGE_QUERY from "./queries/contentPageQuery";
import HOME_PAGE_QUERY from "./queries/homePageQuery";
import Query from "./components/utils/query";
import ContentPage from './pages/contentPage';
import HomePage from './pages/homePage';
import NotFoundPage from './pages/notFoundPage';
import NAVBAR_QUERY from './queries/navbarQuery';
import FOOTER_QUERY from './queries/footerQuery';

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
    // Oregon Green
    success: {
      main: "#0085CA",
    },
    // Beta Red
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
  const [page, setPage] = useState("Beta Theta Pi");
  useEffect(() => {
    document.title = `${page} | Beta Theta Pi Oregon`
 }, [page]);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Query query={NAVBAR_QUERY}>
            {({ data: { navbar } }) => {
              return (
                <Navbar content={navbar.Items} mobileData={navbar.MobileConfig} page={page}/>
              )
            }}
          </Query>  
          <Query query={CONTENT_PAGE_QUERY}>
            {({ data: { contentPages } }) => {
              return (
                <Switch>
                  {contentPages.map((item, key) => (
                    <Route key={key} path={item.Link} render={ props => ( <ContentPage {...props} setPage={setPage} name={item.Name} content={item.Content}/> ) }/>
                  ))}
                  <Query query={HOME_PAGE_QUERY}>
                    {({ data: { homepage } }) => {
                      return (
                          <Route path="/" exact>
                            <HomePage setPage={setPage} pageName={homepage.PageName} content={homepage.Content}/>
                          </Route>
                      ); 
                    }}
                  </Query>
                  <Route>
                    <NotFoundPage setPage={setPage} />
                  </Route>
                </Switch>
              ); 
            }}
          </Query>
          <Query query={FOOTER_QUERY}>
            {({ data: { footer } }) => {
              return (
                <Footer content={footer.Content} />
              )
            }}
          </Query> 
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
