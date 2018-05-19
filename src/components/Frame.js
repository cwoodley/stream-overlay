// @flow

import * as React from "react"
import * as ReactDOM from "react-dom"
import styled from "styled-components"
import { colors, metrics } from "../styles/variables"

const background = require("../images/carts-photo-framed.png")

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "deck sidebar"
    "footer sidebar";
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 1fr;
  height: 720px;
  position: relative;
  width: 1280px;
`

const Deck = styled.div`
  background: ${colors.purple} url(${background}) center center no-repeat;
  background-size: cover;
  grid-area: deck;
  height: ${metrics.deck.height};
  width: ${metrics.deck.width};
`

type Props = {
  children: React.Node
}

export const Frame = ({ children }: Props): React.Node => {
  return (
    <Container>
      <Deck />
      {children}
    </Container>
  )
}
