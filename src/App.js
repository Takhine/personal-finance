import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./layout";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route
            path="/services"
            exact={true}
            component={Services}
          />
          <Route
            path="/contact-us"
            exact={true}
            component={Contact}
          />
          <Route
            path="/privacy-policy"
            exact={true}
            component={Privacy}
          />

          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
