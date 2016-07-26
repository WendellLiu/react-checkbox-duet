import { Checkbox, CheckboxGroup } from '../../lib'
import React, { Component } from 'react'

class Demo1 extends Component {
  constructor(props){
    super(props)

    this.state = {
      memberYouLove: ['McCartney']
    }

    // bind handle function
    this._handleBandMember = this._handleBandMember.bind(this)
  }
  _handleBandMember(checkedList){
    this.setState({
      memberYouLove: checkedList
    })
  }


  render(){
    const memberOptions = {
      onChange: this._handleBandMember,
      checkedList: this.state.memberYouLove,
      name: 'memberYouLove'
    }

    return(
      <div className="demo-container">
        <h2 className="demo-title">Multi-Select</h2>
        <div className="form">
          <h3 className="block-title">Form</h3>
          <span className="question">Which beatles member do you love?</span>
          <CheckboxGroup {...memberOptions} >
            <label><Checkbox value={'McCartney'} /><span>McCartney</span></label>
            <label><Checkbox value={'Lennon'} /><span>Lennon</span></label>
            <label><Checkbox value={'Harrison'} /><span>Harrison</span></label>
            <label><Checkbox value={'Starr'} /><span>Starr</span></label>
          </CheckboxGroup>
        </div>
        <div className="display">
          <h3 className="block-title">Display</h3>
          <div className="block-content">
            <span>My favor list</span>
            <ul>
              {
                this.state.memberYouLove.map((ele, index) => (
                  <li key={index}>{ele}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo1
