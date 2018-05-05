import * as React from "react";
import * as ReactDOM from "react-dom";
import io from "socket.io-client";

import { Game } from "./components/Game";

const socketEndpoint = "http://cale.localdev:3000";

class App extends React.Component {
  state = {
    connected: false,
    currentGame: null
  };

  connectToSocket() {
    const socket = io(socketEndpoint);

    socket.on("connect", () => {
      this.setState({ connected: true });
    });

    socket.on("currentGame", data => {
      this.setCurrentGame(data);
    });
  }

  setCurrentGame(data) {
    if (this.state.currentGame === data) {
      return;
    }

    this.setState({ currentGame: data });
  }

  componentDidMount() {
    this.connectToSocket();
  }

  render() {
    return (
      <React.Fragment>
        <div>{this.state.connected ? "connected" : "disconnected"}</div>

        <Game currentGame={this.state.currentGame} nextGame={false} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
