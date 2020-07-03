import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Sites from "./routes/Sites";
import site from "./routes/site";
import EditorPage from "./routes/EditorPage";
import Content from "./Components/Content";
import CreateSite from "./Components/CreateSite";
import UpdateSite from "./Components/UpdateSite";
import DeleteSite from "./Components/DeleteSite";
import RegisterUser from "./Components/RegisterUser";
import Login from "./Components/Login";
import CreatePage from "./Components/CreatePage";
import site_content from "./routes/site_content";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={CreateSite} exact />
          <Route path="/update" component={UpdateSite} exact />
          <Route path="/delete" component={DeleteSite} exact />
          <Route path="/register" component={RegisterUser} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/createpage" component={CreatePage} exact />
          <Route path="/home" component={Sites} exact />
          <Route path="/site" component={site} exact></Route>
          <Route path="/sitecontent" component={site_content} exact />
          <Route path="/content" component={Content}>
            <Switch>
              <Route path="/blogs" />
            </Switch>
          </Route>
          <Route path="/editorpage" component={EditorPage} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
