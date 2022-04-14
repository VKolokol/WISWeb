import './style.css';

import React from "react";
import NavBar from "./components/NavBar";

import Form from "./components/form";
import NotificationBody from "./components/NotificationBody";



function App() {

  return (
      <div className="container">
        <NavBar />
          <Form />

          {/*    {...ContentNotification.index()}*/}
          {/*/>*/}
      </div>

  );
}

export default App;
