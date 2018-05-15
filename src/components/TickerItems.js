/* @flow */

import * as React from "react"
import * as ReactDOM from "react-dom"
import styled from "styled-components"

const Container = styled.div`
  font-family: "Gothic A1", sans-serif;
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

  setItemList = (items: string[]) => {
    this.handleItemSwap(items)
  }

  handleItemSwap = (items: string[]) => {
    console.log(items.length)
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

  componentDidMount() {
    this.setItemList(this.props.items)
  }

  componentWillReceiveProps() {
    this.setItemList(this.props.items)
  }

  render() {
    const data = this.props.items
    const length = data.length
    const index = this.state.activeItem

    return (
      <Container onClick={this.handleNextTicker}>
        Ticker Items:
        {data[index]}
      </Container>
    )
  }
}
