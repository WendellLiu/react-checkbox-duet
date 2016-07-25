import React, { PropTypes, Component } from 'react'
import { CheckboxInGroup, CheckboxSingle } from './subCheckbox'

class Checkbox extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number
    ]),
    inGroup: PropTypes.bool.isRequired,
    checked: PropTypes.bool
  }

  static defaultProps = {
    inGroup: true
  }

  render(){
    if(this.props.inGroup){

      return(
        <CheckboxInGroup
          {...this.props}
        />
      )
    }
    return(
      <CheckboxSingle
        {...this.props}
      />
    )
  }
}

export default Checkbox
