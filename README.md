# react-checkbox-duet

inspired from [react-radio-group](https://github.com/chenglou/react-radio-group) and [react-checkbox-group](https://github.com/ziad-saab/react-checkbox-group)

## Usage
you can use this lib like this for multi-selecting checkboxs

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
  value={'loveBeatles'}
/>  
```

## Install

```sh
npm install --save react-checkbox-duet
```

## Example

## Properties

## License
MIT
