/* @flow */

import * as React from "react"
import * as ReactDom from "react-dom"
import io from "socket.io-client"

const socketEndpoint = 'http://localhost:3000/update'

type Props = {}

type State = {
  currentGame: string | null
}

export class Game extends React.Component<Props,State> {
  state = {
    currentGame: null
  }

  connectToSocket() {
    const socket = io(socketEndpoint)

    socket.on("text", (data) => console.log(data));

  }

  componentDidMount() {
    this.connectToSocket()
  }

  render() {
    return (
      <React.Fragment>
        <h1>titles</h1>    

        <h2>game: {this.state.currentGame}</h2>
      </React.Fragment>
    )
  }
}