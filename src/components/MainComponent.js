import React, { Component } from "react";
import "../assets/css/main.css";
import { BrowserRouter, Route } from "react-router-dom";
import JobsContainer from "./JobsComponent";
import TopNav from "./shared/TopNavbar";
import SidebarLeft from "./shared/SidebarLeft";
import SidebarRight from "./shared/SidebarRight";

export class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <TopNav />
        <SidebarLeft/>
          <Route path="/" component={JobsContainer} />
        <SidebarRight/>
      </BrowserRouter>
    );
  }
}

export default Main;
