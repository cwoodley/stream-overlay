// @flow

import React from "react"
import styled from "styled-components"
import { ErrorTriangle } from "./icons/error-triangle"
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

export const Status: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      {!props.connected && <ErrorTriangle size={30} fill={colors.magenta} />}
    </Container>
  )
}
