// @flow

import * as React from "react"
import * as ReactDOM from "react-dom"
import styled from "styled-components"

const Container = styled.div`
  height: 720px;
  width: 1280px;
`

type Props = {
  children: React.Node
}

export const Frame = ({ children }: Props): React.Node => {
  return <Container>{children}</Container>
}
