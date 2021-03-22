import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Add from "./components/Add";

const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/add/:id" component={Add} />
        <Route exact path="/:id" component={Admin} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

interface AppProps {}

export default App;
