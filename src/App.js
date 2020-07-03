import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Sites from "./Pages/Sites";
import SitePage from "./Pages/SitePage";
import EditorPage from "./Pages/EditorPage";
import Content from "./Components/Content";
import CreateSite from "./Pages/CreateSite";
import UpdateSite from "./Pages/UpdateSite";
import DeleteSite from "./Pages/DeleteSite";
import RegisterUser from "./Pages/RegisterUser";
import Login from "./Pages/Login";
import CreatePage from "./Pages/CreatePage";
import "antd/dist/antd.css";

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
          <Route path="/sitepage" component={SitePage} exact></Route>
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
