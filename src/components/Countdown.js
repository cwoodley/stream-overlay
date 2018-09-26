/* @flow */

import * as React from "react"
import * as ReactDOM from "react-dom"
import styled from "styled-components"
import { colors } from "../styles/variables"

const Heading = styled.h2`
  color: ${colors.silver};
`

type Props = {
  deadline: Date
}

type State = {
  hours: number,
  minutes: number
}

export class Countdown extends React.Component<Props, State> {
  state = {
    hours: 0,
    minutes: 0
  }

  getTimeRemaining = (deadline: Date) => {
    const now = new Date()
    const timeEnd = deadline.toJSON()
    const timeStart = now.toJSON()

    // r = remaining time in milliseconds
    const r = Date.parse(timeEnd) - Date.parse(timeStart)
    const minutes = Math.floor((r / (1000 * 60)) % 60)
    const hours = Math.floor((r / (1000 * 60 * 60)) % 60)

    return {
      hours: hours,
      minutes: minutes
    }
  }

  runClock = (hours: number, minutes: number) => {
    const complete = hours <= 0 && minutes <= 0

    setInterval(() => {
      console.log('running')

      this.setState({
        hours: hours,
        minutes: minutes
      })

      if (complete) {
        this.setState({
          hours: 0,
          minutes: 0
        })
      }
    }, 1000 * 30)

  }

  setClock = (deadline: Date) => {
    const hours = this.getTimeRemaining(deadline).hours
    const minutes = this.getTimeRemaining(deadline).minutes
    const complete = hours <= 0 && minutes <= 0

    if (!complete) {
      this.setState(
        {
          hours: hours,
          minutes: minutes
        },
        this.runClock(hours, minutes)
      )
    }
  }

  componentDidMount() {
    this.setClock(this.props.deadline)
  }

  render() {
    const hours = this.state.hours
    const minutes = this.state.minutes
    const complete = hours <= 0 && minutes <= 0

    return (
      <React.Fragment>
        <h2>Time Remaining:</h2>
        {!complete && `${this.state.hours}hrs, ${this.state.minutes}mins`}
        {complete && `Time's up!`}
      </React.Fragment>
    )
  }
}
