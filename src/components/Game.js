import * as React from "react"
import * as ReactDom from "react-dom"
import io from "socket.io-client"

const socketEndpoint = 'http://localhost:3000/update'

export class Game extends React.Component {

  connectToSocket() {
    const socket = io(socketEndpoint)

    socket.on("text", (data) => console.log(data));

  }

  componentDidMount() {
    this.connectToSocket()
  }

  render() {
    return (
      <h1>game titles</h1>    
    )
  }
}