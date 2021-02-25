# React Native Radio Buttons Group

Simple and Best. An easy to use radio buttons for react native apps.

![npm](https://img.shields.io/npm/v/react-native-radio-buttons-group) ![LICENSE MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)

[![NPM](https://nodei.co/npm/react-native-radio-buttons-group.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-native-radio-buttons-group/)

### Install

```
npm i react-native-radio-buttons-group --save
```
or
```
yarn add react-native-radio-buttons-group
```

### Usage

##### Javascript Example

###### App.js
```
import React, { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Option 1',
    value: 'option1'
}, {
    id: '2',
    label: 'Option 2',
    value: 'option2'
}]

export default function App() {

    const [radioButtons, setRadioButtons] = useState(radioButtonsData)

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }

    return (
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
        />
    );

}

```

##### Typescript Example

###### App.tsx
```
import React, { useState } from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

const radioButtonsData: RadioButtonProps[] = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Option 1',
    value: 'option1'
}, {
    id: '2',
    label: 'Option 2',
    value: 'option2'
}]

export default function App() {

    const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>(radioButtonsData)

    function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
        setRadioButtons(radioButtonsArray);
    }

    return (
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
        />
    );

}

```

### Props

#### RadioButton
Key | Type | Required | Default | Valid Values
--- | --- | --- | --- | --- 
color | string | no | #444 | css color formats
containerStyle | object | no | | react style
disabled | boolean | no | false | true / false
id | string | yes |  | any string
label | string | no |  | any string
labelStyle | object | no |  | react style
layout | enum | no | row | row / column
onPress | function | no |  | any function 
selected | boolean | no | false | true / false
size | number | no | 24 | positive numbers
value | string | no |  | any string

#### RadioGroup
Key | Type | Required | Default | Valid Values
--- | --- | --- | --- | ---
layout | enum | no | column | row / column
onPress | function | no | | any function
radioButtons | array | yes | | arrary of [RadioButton](#radiobutton) objects

###### Horizontal (side by side)
```
<RadioGroup 
    radioButtons={radioButtons} 
    onPress={onPressRadioButton} 
    layout='row'
/>
```

## Contributions

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the [MIT License](https://github.com/ThakurBallary/react-native-radio-buttons-group/blob/master/LICENSE)
