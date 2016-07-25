import React, { PropTypes, Component } from 'react'

export class CheckboxInGroup extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number
    ])
  }

  static contextTypes = {
    onChange: PropTypes.func,
    checkedList: PropTypes.array,
    name: PropTypes.string
  }

  render(){
    let { checkedList, name, onChange } = this.context
    const optional = {}

    checkedList = checkedList || []
    if(checkedList.indexOf(this.props.value) !== -1){
      optional.checked = true
    }
    if(typeof onChange === 'function'){
      optional.onChange = onChange.bind(null, this.props.value)
    }

    return(
      <input
        {...this.props}
        type="checkbox"
        name={name}
        {...optional}
      />
    )
  }
}

export class CheckboxSingle extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number
    ]),
    name: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool
  }

  static defaultProps = {
    checked: false
  }

  constructor(props){
    super(props)

    this._handleChange = this._handleChange.bind(this)
  }

  _handleChange(){
    if(typeof this.props.onChange === 'function'){
      this.props.onChange(!this.props.checked)
    }
  }

  render(){
    const { onChange, ...rest } = this.props

    return(
      <input
        {...rest}
        type="checkbox"
        onChange={this._handleChange}
      />
    )
  }
}
