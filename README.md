# react-checkbox-duet

inspired from [react-radio-group](https://github.com/chenglou/react-radio-group) and [react-checkbox-group](https://github.com/ziad-saab/react-checkbox-group)

* use `react-checkbox-duet` in multi-select or binary-choice way
* In `onChange` function, you can retrieve the true data, not `event` object.
* focus on the DOM and data-binding
* means no style-dependency(css) so you can do whatever you want

## Usage
you can use the lib like this for multi-select checkboxs

```javascript
import { Checkbox, CheckboxGroup } from 'react-checkbox-duet'

const options = {
  onChange,
  checkedList,
  name,
}

<CheckboxGroup {...options} >
  <Checkbox value={'McCartney'} />
  <Checkbox value={'Lennon'} />
  <Checkbox value={'Harrison'} />
  <Checkbox value={'Starr'} />
</CheckboxGroup>
```

or, you can use like following code for single checkbox

```javascript
import { Checkbox } from 'react-checkbox-duet'

const options = {
  onChange,
  name,
  checked: false  // if you don't set this argument, default checked state is false
}

// checked if you love the beatles
<Checkbox
  {...options}
  value={'fan'}
  inGroup={false} // set this to use Checkbox alone
/>  
```

## Install

```sh
npm install --save react-checkbox-duet
```

## Properties
### Multi-selecting
#### CheckboxGroup
#### Checkbox

### Binary Choice
#### Checkbox

## License
MIT
