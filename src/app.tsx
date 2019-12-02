import React from "react"
import ReactDOM from "react-dom"
import queryString from "query-string"
import io from "socket.io-client"

import { Frame } from "./components/Frame"
import { TickerItems } from "./components/TickerItems"
import { Sidebar } from "./components/Sidebar"
import { Countdown } from "./components/Countdown"
import { Status } from "./components/Status"

const socketEndpoint = "http://localhost:3000"

interface State {
  connected: boolean
  currentGame: string
  nextGame: string
  debugStyling: boolean
  tickerItems: string[]
  deadline?: Date
  donationTotal: string
}

export class App extends React.Component<{}, State> {
  state: State = {
    connected: false,
    currentGame: "",
    nextGame: "",
    debugStyling: false,
    tickerItems: [],
    deadline: undefined,
    donationTotal: ""
  }

  connectToSocket() {
    const socket = io(socketEndpoint)

    socket.on("connect", () => {
      this.setState({
        connected: true
      })
    })

    socket.on("disconnect", () => {
      this.setState({
        connected: false
      })
    })

    socket.on("donationTotal", data => {
      this.setState({
        donationTotal: data
      })
    })

    socket.on("tickerItems", data => {
      this.setState({
        tickerItems: data
      })
    })

    socket.on("deadline", data => {
      this.setState({
        deadline: data
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
      <Frame>
        <Status connected={this.state.connected} />
        <TickerItems items={this.state.tickerItems} />
        <Sidebar>
          {this.state.deadline && (
            <Countdown deadline={new Date(this.state.deadline)} />
          )}

          {this.state.donationTotal && (
            <React.Fragment>
              <h2>Amount Raised:</h2>
              {this.state.donationTotal}
            </React.Fragment>
          )}
        </Sidebar>
      </Frame>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
