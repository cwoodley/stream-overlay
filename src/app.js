/* @flow */

import * as React from "react"
import * as ReactDOM from "react-dom"
import queryString from "query-string"
import io from "socket.io-client"

import { Game } from "./components/Game"

const socketEndpoint = "http://cale.localdev:3000"

type State = {
  connected: boolean,
  currentGame: string,
  nextGame: string,
  debugStyling: boolean,
  tickerItems: string[]
}

export class App extends React.Component<{}, State> {
  state = {
    connected: false,
    currentGame: "",
    nextGame: "",
    debugStyling: false,
    tickerItems: []
  }

  connectToSocket() {
    const socket = io(socketEndpoint)

    socket.on("connect", () => {
      this.setState({
        connected: true
      })
    })

    socket.on("currentGame", data => {
      this.setState({
        currentGame: data
      })
    })

    socket.on("tickerItems", data => {
      this.setState({
        tickerItems: data
      })
    })

    socket.on("debug", data => {
      console.log(data)
    })
  }

  checkDebugFlags() {
    const flags = location.search

    if (!flags) {
      return
    }

    const parsed = queryString.parse(flags)
    if (!parsed) {
      return
    } else if (parsed.debug === "styles") {
      this.setState({
        debugStyling: true
      })
    }
  }

  componentDidMount() {
    this.checkDebugFlags()
    this.connectToSocket()
  }

  render() {
    return (
      <React.Fragment>
        <div> {this.state.connected ? "connected" : "disconnected"} </div>
        <Game
          currentGame={this.state.currentGame}
          nextGame={this.state.nextGame}
        />
        {/* <Ticker tickerItems={this.state.tickerItems} /> */}
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, (document.getElementById("app"): any))
