import { Checkbox, CheckboxGroup } from '../lib'
import React from 'react'
import { render } from 'react-dom'

render(
  <CheckboxGroup>
    <Checkbox />
  </CheckboxGroup>,
  document.getElementById('root')
);
