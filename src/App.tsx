import React from "react";
import "./App.css";
import Accordion from "./components/accordion/Accordion";
import PageTitle from "./components/pageTitle/PageTitle";
import Raiting from "./components/raiting/Raiting";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <PageTitle title={"Hello hacking wold"} />
        <PageTitle title={"Hello hacking wold, myther fucker"} />
      </div>
      <Raiting value={3} />
      <Accordion title={"Menu : "} collapsed={true} />
      <Accordion title={"Users : "} collapsed={true} />
    </div>
  );
}

export default App;
