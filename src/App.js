import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Sites from "./routes/Sites";
import site from "./routes/site";
import editorPage from "./routes/editorPage";
import CreateSite from "./Components/CreateSite";
import UpdateSite from "./Components/UpdateSite";
import DeleteSite from "./Components/DeleteSite";
import registerUser from "./routes/registerUser";
import Login from "./Components/Login";
import CreatePage from "./Components/CreatePage";
import siteContentBlog from "./routes/siteContentBlog";
import siteContent from "./routes/siteContent";
import siteGeneral from "./routes/siteGeneral";
import siteAssets from "./routes/siteAssets";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/createSite" component={CreateSite} exact />
          <Route path="/update" component={UpdateSite} />
          <Route path="/delete" component={DeleteSite} />
          <Route path="/register" component={registerUser} />
          <Route path="/login" component={Login} exact />
          <Route path="/createPage" component={CreatePage} />
          <Route path="/sites" component={Sites} exact />
          <Route path="/site/:siteName" component={site} exact />
          <Route path="/site/:siteName/general" component={siteGeneral} exact />
          <Route path="/site/:siteName/content" component={siteContent} exact />
          <Route path="/site/:siteName/assets" component={siteAssets} exact />
          <Route
            path="/site/:siteName/content/blog"
            component={siteContentBlog}
            exact
          />
          <Route path="/:sitename/editor" component={editorPage} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
