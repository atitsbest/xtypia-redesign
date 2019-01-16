import React from "react";
import ReactDOM from "react-dom";
import { TypographyStyle, GoogleFont } from "react-typography";
import { typography } from "./utils/typography";
import { Router } from "@reach/router";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { TemplateList } from "./pages/TemplateList";

function App() {
  return (
    <React.Fragment>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <Router>
        <Home path="/" />
        <Detail path="/detail" />
        <TemplateList path="/templatelist" />
      </Router>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
