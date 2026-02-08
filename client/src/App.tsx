import { Router as WouterRouter, Route, Switch } from "wouter"; // Importa Router con un alias

function Router() {
  return (
    <WouterRouter base="/portafolio">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}
