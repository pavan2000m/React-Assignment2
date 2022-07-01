import React, { Component } from 'react'
import "./Display.css"

export default class Display extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt=" "></img>
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}
