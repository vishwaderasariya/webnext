import React from "react";
import { Route, BrowserRouter, Switch, Router } from "react-router-dom";
import Sites from "./routes/Sites";
import site from "./routes/site";
import EditorPage from "./routes/EditorPage";
import CreateSite from "./Components/CreateSite";
import UpdateSite from "./Components/UpdateSite";
import DeleteSite from "./Components/DeleteSite";
import RegisterUser from "./routes/RegisterUser";
import Login from "./Components/Login";
import CreatePage from "./Components/CreatePage";
import site_content from "./routes/site_content";
import site_content_blog from "./routes/site_content_blog";

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
          <Route path="/sites" component={Sites} exact />
          <Route path="/site/:sitename" component={site} />
          <Route path="/site/content" component={site_content} exact />
          <Route
            path="/site/content/blog"
            component={site_content_blog}
            exact
          />
          <Route path="/editor" component={EditorPage} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
