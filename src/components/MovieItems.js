import React, { Component } from 'react'
import Display from './Display'
import "./MovieItems.css"

export default class MovieItems extends Component {
  render() {
    return (
       <>
      <div>
        <Display image={"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"} name={"Avangers"} ></Display>
        <Display image={"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"} name={"Avangers"} ></Display>
        <Display image={"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"} name={"Avangers"} ></Display>
        <Display image={"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"} name={"Avangers"} ></Display>
        <Display image={"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"} name={"Avangers"} ></Display>
        <Display image={"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"} name={"Avangers"} ></Display>
      </div>
      
      </>
    )
  }
}
