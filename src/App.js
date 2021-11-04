import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Navigation />
        <button onClick={() => themeToggler()}>Change theme</button>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/works" component={Works} />
          <Route path="/works/:slug">
            <Projects />
          </Route>
          <Redirect to="/" />
        </Switch>
      </ThemeProvider>
  );
};

export default App;
