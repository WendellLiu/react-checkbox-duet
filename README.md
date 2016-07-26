# react-checkbox-duet

inspired from [react-radio-group](https://github.com/chenglou/react-radio-group) and [react-checkbox-group](https://github.com/ziad-saab/react-checkbox-group)

[DEMO](https://wendellliu.github.io/react-checkbox-duet/)

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

| Properties | Type | Default | Required |
| :--------: |:----:| :------:| :------: |
| name   | string |        | false |
| checkedList   | array      | `[]` | false|
| onChange | function |    | false|

* name: child `input` name
* checkedList: default checked input values
* onChange:

```js
onChange(nextCheckedList){
  doSomeForCheckedList(checkedList)
}
```

#### Checkbox
| Properties | Type | Default | Required |
| :--------: |:----:| :------:| :------: |
| value   | string(number, bool) |        | false |
| **inGroup**   | bool      | `true` | **unnecessary to set**|

> `inGroup` must be `true` when multi-select scenario

* value: input value for identification

### Binary Choice
#### Checkbox

| Properties | Type | Default | Required |
| :--------: |:----:| :------:| :------: |
| value   | string |        | false |
| name   | string      |  | false|
| checked | bool |  `false`  | false|
| onChange | function |    | false|
| **inGroup**   | bool      | `true` | **must set to make it work for binary-choice**|

> `inGroup` must be `false` when binary-choice scenario

* value: input value for identification
* name: input name for your purpose
* checked: input default checked
* onChange:

```js
onChange(nextChecked){ // nextChecked will be opposite of the input checked before triggering the event
  doSomeForChecked(nextChecked)
}
```
## License
MIT
