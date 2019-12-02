import React from "react"

type Props = {
  currentGame: string,
  nextGame: string
}

export const Game: React.FC<Props> = (props: Props) => {
  const { currentGame, nextGame } = props

  return (
    <React.Fragment>
      <h1> titles </h1>

      <h2> current game: {currentGame} </h2>
      <h2> next game: {nextGame} </h2>
    </React.Fragment>
  )
}
