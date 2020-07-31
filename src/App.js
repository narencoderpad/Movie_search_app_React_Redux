import React, { Component } from 'react';
import VideoComponent from "./Component/VideoComponent";
import Login from "./Component/Login"
import './App.css'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }  

  
  render() {
    return (
      <div className="">
      <BrowserView>
          <VideoComponent/>
      </BrowserView>
      <MobileView>
      <VideoComponent MobileClass="100%" padClass={"Pad0"}/>
      </MobileView>
      </div>
    );
  }
}

export default App;
