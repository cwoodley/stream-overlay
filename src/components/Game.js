/* @flow */

import * as React from "react";
import * as ReactDom from "react-dom";

type Props = {
  currentGame: string,
  nextGame: string
};

export class Game extends React.Component<Props> {
  render() {
    const { currentGame, nextGame } = this.props;

    return (
      <React.Fragment>
        <h1> titles </h1>

        <h2> current game: {currentGame} </h2>
        <h2> next game: {nextGame} </h2>
      </React.Fragment>
    );
  }
}
