import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Sites from "./routes/Sites";
import site from "./routes/site";
import EditorPage from "./routes/EditorPage";
import CreateSite from "./Components/CreateSite";
import UpdateSite from "./Components/UpdateSite";
import DeleteSite from "./Components/DeleteSite";
import RegisterUser from "./Components/RegisterUser";
import Login from "./Components/Login";
import CreatePage from "./Components/CreatePage";
import site_content from "./routes/site_content";
import Blog from "./routes/Blog";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/createsite" component={CreateSite} exact />
          <Route path="/update" component={UpdateSite} />
          <Route path="/delete" component={DeleteSite} />
          <Route path="/register" component={RegisterUser} />
          <Route path="/login" component={Login} exact />
          <Route path="/createpage" component={CreatePage} />
          <Route path="/" component={Sites} exact />
          <Route path="/site" component={site} exact></Route>
          <Route path="/site/content" component={site_content} />
          <Switch>
            <Route path="/content/blog" component={Blog} exact></Route>
          </Switch>
          <Route path="/editorpage" component={EditorPage} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
