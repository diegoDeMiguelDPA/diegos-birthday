import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Diego's Birhthday: May 26-29. Lüneburg, Niedersachsen, Germany</h1>
        <p>
          Hello to everyone. May 26th is my Birthday. I will be staying in
          Lüneburg, a City 30mins south of Hamburg. The place is big enough for
          many people to be comfortable. Also there is an art exhibition in the
          area during the weekend. The Web page for the event is this one. The
          idea is to use the house as headquarters and move with bikes and/or
          train to the different destinations the festival offers. Also my
          Birthday itself we’ll be happening from 12:30hs on Thursday May 26th,
          which is a Holiday.
        </p>
      </header>
    </div>
  );
}

export default App;
