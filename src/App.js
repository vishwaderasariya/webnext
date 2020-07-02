import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Sites from "./Pages/Sites";
import SitePage from "./Pages/SitePage";
import EditorPage from "./Pages/EditorPage";
import Content from "./Components/Content";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Sites} exact />
        <Route path="/sitepage" component={SitePage} exact></Route>
        <Route path="/content" component={Content}>
          <Switch>
            <Route path="/blogs" />
          </Switch>
        </Route>
        <Route path="/editorpage" component={EditorPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
