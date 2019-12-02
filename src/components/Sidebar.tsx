import React from "react"
import styled from "styled-components"
import { colors } from "../styles/variables"

const Wrapper = styled.aside`
  background: ${colors.purple};
  padding-top: 220px;
  grid-area: sidebar;
  height: 100%;
  width: 240px;
`

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 60px;
`

type Props = {
  children: React.ReactNode[]
}

export const Sidebar: React.FC<Props> = (props: Props) => {
  const elements = props.children.map((child, i) => {
    return <Container key={i}>{child}</Container>
  })

  return <Wrapper>{elements}</Wrapper>
}
