/* @flow */

import React from "react"
import styled from "styled-components"
import { colors, metrics } from "../styles/variables"

const Container = styled.div`
  background: ${colors.purple};
  bottom: 0;
  font-size: 24px;
  grid-area: footer;
  height: 76px;
  overflow: hidden;
  position: relative;
  width: ${metrics.deck.width};
`

interface ItemProps {
  isActive: boolean
}

const StyledItem = styled.div<ItemProps>`
  display: inline-block;
  opacity: 0;
  position: absolute;
  top: 22px;
  text-align: center;
  transition: opacity 1.5s ease-in-out;
  width: 100%;

  ${({ isActive }) =>
    isActive &&
    `
    transition: opacity 1.5s ease-in-out;
    opacity: 1;
  `};
`

type Props = {
  items: string[]
}

type State = {
  activeItem: number
}

export class TickerItems extends React.Component<Props, State> {
  state = {
    activeItem: 0
  }

  handleNextTicker = () => {
    let index = this.state.activeItem
    const items = this.props.items
    const length = items.length

    index++

    if (index >= length) {
      index = 0
    }

    this.setState({
      activeItem: index
    })
  }

  cycleTicker = () => {
    setInterval(() => {
      this.handleNextTicker()
    }, 10000)
  }

  componentDidMount() {
    this.cycleTicker()
  }

  render() {
    const data = this.props.items
    const activeItem = this.state.activeItem

    const dataItems = data.map((item, i) => {
      const isActive = i === activeItem ? true : false
      return (
        <StyledItem key={i} isActive={isActive}>
          {item}
        </StyledItem>
      )
    })

    return <Container onClick={this.handleNextTicker}>{dataItems}</Container>
  }
}
