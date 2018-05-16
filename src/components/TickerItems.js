/* @flow */

import * as React from "react"
import * as ReactDOM from "react-dom"
import styled from "styled-components"

const Container = styled.div`
  font-family: "Gothic A1", sans-serif;
  position: relative;
`

const StyledItem = styled.div`
  display: inline-block;
  position: absolute;
  transition: opacity 0.2s linear;
  opacity: ${props => (props.isActive ? "1" : "0")};
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
    }, 2000)
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

    return (
      <Container onClick={this.handleNextTicker}>
        Ticker Items:
        {dataItems}
      </Container>
    )
  }
}
