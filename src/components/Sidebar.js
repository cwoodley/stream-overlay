/* @flow */

import * as React from "react"
import * as ReactDOM from "react-dom"
import styled from "styled-components"
import { colors, metrics } from "../styles/variables"

const Wrapper = styled.aside`
  background: ${colors.purple};
  grid-area: sidebar;
  height: 100%;
  width: 240px;
`

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
`

type Props = {
  children: React.Node[]
}

export const Sidebar = ({ children }: Props): React.Node => {
  const elements = children.map((child, i) => {
    return <Container key={i}>{child}</Container>
  })

  return <Wrapper>{elements}</Wrapper>
}
