import { Checkbox, CheckboxGroup } from '../../lib'
import React, { Component } from 'react'

class Demo2 extends Component {
  constructor(props){
    super(props)

    this.state = {
      fan: false
    }

    // bind handle function
    this._handleFanOrNot = this._handleFanOrNot.bind(this)
  }

  _handleFanOrNot(bool){
    console.log(bool)
    this.setState({
      fan: bool
    })
  }

  render(){
    const fanOptions = {
      onChange: this._handleFanOrNot,
      checked: this.state.fan
    }

    return(
      <div className="demo-container">
        <h2 className="demo-title">
          <a href="https://github.com/WendellLiu/react-checkbox-duet/blob/master/example/js/Demo2.js">
          Binary-Choice
          </a>
        </h2>
        <div className="form">
          <h3 className="block-title">Form</h3>
          <label>
            <span className="question">Are you a Beatlemania?</span>
            <Checkbox
              {...fanOptions}
              value={'fan'}
              inGroup={false}
            />
          </label>
        </div>
        <div className="display">
          <h3 className="block-title">Display</h3>
          <div className="block-content">
            <span>A fan? {this.state.fan ? 'YEAH!!!' : 'Noop!'}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo2
