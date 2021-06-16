import React from "react";
import Router from "./Router";
import Header from "./Header";


class App extends React.Component {
  render() {
    return <>
    <Header />
    <Router/>
    </>;
  }
}

export default App;
