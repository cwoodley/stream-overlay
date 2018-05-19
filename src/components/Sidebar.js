/* @flow */

import * as React from "react"
import * as ReactDOM from "react-dom"
import styled from "styled-components"
import { colors, metrics } from "../styles/variables"

const Container = styled.aside`
  background: ${colors.purple};
  grid-area: sidebar;
  height: 100%;
  width: 240px;
`

type Props = {
  children: React.Node
}

export const Sidebar = ({ children }: Props): React.Node => {
  return <Container>{children}</Container>
}
