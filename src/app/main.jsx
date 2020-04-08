import React, { Component } from 'react'
import './styles.scss';
import Provider from 'store/provider';
import Test1 from 'components/Test1';
import Test2 from 'components/Test2';
export default class App extends Component {
  render() {
    return (
      <Provider>
        <Test1 />
        <Test2 />
      </Provider>
    )
  }
}
