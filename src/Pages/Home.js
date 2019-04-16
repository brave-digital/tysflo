// Home Page

import React, { Component } from 'react'
import Comparison from '../Components/Comparison'
import { RunGAPageView } from '../Components/GAFunctions'
import Page from '../Components/Page'
import First from '../Components/First'
import Second from '../Components/Second'
import { Helmet } from "react-helmet";


export default class Home extends Component {
  constructor (props) {
    super(props)
    RunGAPageView()
  }

  render () {
    return (
      <Page>
        <Helmet>
          <title>Tysflo Video Sharing Platform | Home</title>
          <meta
            name="description"
            content="Every Minute, 400 Hours of Content Is Uploaded to Large Internet Video Sharing Platforms. How Can Your Content Compete With 9 Billion Videos?"
          />
        </Helmet>
        <Comparison>
          <First />
          <Second />
        </Comparison>
      </Page>
    );
  }
}
