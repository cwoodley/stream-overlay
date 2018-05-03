import * as React from "react"
import * as ReactDOM from "react-dom"

import { Game } from "./components/Game";

const App = (props, context) => {
  return <Game />
}

ReactDOM.render(<App />, document.getElementById("app"))