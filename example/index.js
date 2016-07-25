import { Checkbox, CheckboxGroup } from '../lib'
import React, { Component } from 'react'
import { render } from 'react-dom'

class Demo extends Component {
  constructor(props){
    super(props)

    this.state = {
      fan: false,
      memberYouLove: ['McCartney']
    }

    // bind handle function
    this._handleBandMember = this._handleBandMember.bind(this)
    this._handleFanOrNot = this._handleFanOrNot.bind(this)
  }
  _handleBandMember(checkedList){
    this.setState({
      memberYouLove: checkedList
    })
  }

  _handleFanOrNot(bool){
    console.log(bool)
    this.setState({
      fan: bool
    })
  }

  render(){
    const memberOptions = {
      onChange: this._handleBandMember,
      checkedList: this.state.memberYouLove,
      name: 'memberYouLove'
    }

    const fanOptions = {
      onChange: this._handleFanOrNot,
      checked: this.state.fan
    }

    return(
      <div>
          <div className="form">
          <CheckboxGroup {...memberOptions} >
            <label><Checkbox value={'McCartney'} /><span>McCartney</span></label>
            <label><Checkbox value={'Lennon'} /><span>Lennon</span></label>
            <label><Checkbox value={'Harrison'} /><span>Harrison</span></label>
            <label><Checkbox value={'Starr'} /><span>Starr</span></label>
          </CheckboxGroup>

          <label>
            <span>Are you a Beatlemania?</span>
            <Checkbox
              {...fanOptions}
              value={'fan'}
              inGroup={false}
            />
          </label>
        </div>
        <div className="display">
          <span>Which beatles member do you love?</span>
          <ul>
            {
              this.state.memberYouLove.map((ele, index) => (
                <li key={index}>{ele}</li>
              ))
            }
          </ul>
          <span>A fan? {this.state.fan ? 'YEAH!!!' : 'Noop!'}</span>

        </div>
      </div>
    )
  }
}

render(
  <Demo />,
  document.getElementById('root')
);
