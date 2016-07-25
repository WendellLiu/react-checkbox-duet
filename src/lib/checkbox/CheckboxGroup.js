import React, { PropTypes, Component } from 'react'

class CheckboxGroup extends Component {
  static propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.node.isRequired,
    checkedList: PropTypes.array,
    Component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.object
    ])
  }

  static defaultProps = {
    Component: 'div',
    checkedList: []
  }

  constructor(props){
    super(props)

    this._handleChange = this._handleChange.bind(this)
  }

  static childContextTypes = {
    onChange: PropTypes.func,
    checkedList: PropTypes.array,
    name: PropTypes.string
  }

  getChildContext(){
    const { checkedList, name } = this.props

    return(
      {
        checkedList,
        name,
        onChange: this._handleChange
      }
    )
  }

  _handleChange(changedValue){

    if(typeof this.props.onChange !== 'function') return
    let checkedList = [...this.props.checkedList]

    const index = checkedList.indexOf(changedValue)

    if(index === -1){
      checkedList.push(changedValue)
    }else{
      checkedList.splice(index, 1)
    }

    this.props.onChange(checkedList)

  }

  render(){
    const { Component, name, children, checkedList, onChange, ...rest } = this.props

    return (
      <Component {...rest} >{ children }</Component>
    )
  }
}

export default CheckboxGroup
