// @flow

import * as React from "react"
import * as ReactDOM from "react-dom"
import styled from "styled-components"
import ErrorTriangle from "./icons/error-triangle"
import { colors } from "../styles/variables"

const Container = styled.div`
  bottom: 25px;
  left: 14px;
  position: absolute;
  z-index: 9999;
`

type Props = {
  connected?: boolean
}

export class Status extends React.Component<Props> {
  render() {
    return (
      <Container>
        {!this.props.connected && <ErrorTriangle size="30" fill={colors.magenta} />}
      </Container>
    )
  }
}
