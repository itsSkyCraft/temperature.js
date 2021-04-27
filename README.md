# node-temperature.js
A Node.Js Package That Helps You in Converting Temperature
## Features
- Super Simple And Full-Features Converter
- More than 10 Methods
- Celsius, Fahrenheit, Kelvin, reamur Converter are Available!!
- Multi Converter Also available!!
## Menu
* [Celsius](#celsius)
* [Fahrenheit](#fahrenheit)
* [Kelvin](#kelvin)
* [Reamur](#reamur)
## Celsius
Celsius To Fahrenheit Method:
```js
const Temperature = require('node-temperature.js');

Temperature.CelsiusToFahrenHeit(10).then(res => {
    // convert 10 Celsius to FahrenHeit
    console.log(res) // 50
}) 
```
Celsius To Kelvin Method:
```js
const Temperature = require('node-temperature.js');

Temperature.CelsiusToKelvin(10).then(res => {
    // convert 10 Celsius to Kelvin
    console.log(res) // 283.15
})
```
Celsius To Reamur Method:
```js
const Temperature = require('node-temperature.js');

Temperature.CelsiusToReamur(10).then(res => {
    // convert 10 Celsius to Reamur
    console.log(res) // 8
})
```
Multi Convert By Celsius Method:
```js
const Temperature = require('node-temperature.js');

Temperature.MultiByCelsius(10).then(res => {
    // Multi Convert 10 Celsius
    console.log(res)
    /*{
        fahrenheit: 50,
        kelvin: 283.15,
        reamur: 8
    }*/
});
```
## Fahrenheit
FahrenHeit to Celsius Method:
```js
const Temperature = require('node-temperature.js');

Temperature.FahrenheitToCelsius(10).then(res => {
    // Convert 10 FahrenHeit to Celsius
    console.log(res) // -12.2222
})
```
FahrenHeit to Kelvin Method:
```js
const Temperature = require('node-temperature.js');

Temperature.FahrenheitToKelvin(10).then(res => {
    // Convert 10 FahrenHeit to Kelvin
    console.log(res) // 260.92777
})
```
FahrenHeit To Reamur Method:
```js
const Temperature = require('node-temperature.js');

Temperature.FahrenheitToReamur(10).then(res => {
    // Convert 10 FahrentHeit To Reamur
    console.log(res) // -9.7777
})
```
Multi Convert By FahrenHeit:
```js
const Temperature = require('node-temperature.js');

Temperature.MultiByFahrenheit(10).then(res => {
    // Multi Convert 10 Fahrenheit
    console.log(res) 
    /*{
        celsius: -12.222222222222223,
        kelvin: 260.92777777777775,
        reamur: -9.777777777777779
    }*/
})
```
## Kelvin
Kelvin To Celsius Method:
```js
const Temperature = require('node-temperature.js')

Temperature.KelvintoCelsius(10).then(res => {
    // Convert 10 Kelvin to Celsius
    console.log(res) // -263.15
})
```
Kelvin to FahrenHeit Method:
```js
const Temperature = require('node-temperature.js')

Temperature.KelvintoFahrenheit(10).then(res => {
    // Convert 10 Kelvin to Fahrenheit
    console.log(res) // -441.66999
})
```
Kelvin to Reamur Method:
```js
const Temperature = require('node-temperature.js')

Temperature.KelvintoReamur(10).then(res => {
    // Convert 10 Kelvin to Reamur
    console.log(res) // -210.5199
})
```
Multi Convert By Kelvin:
```js
const Temperature = require('node-temperature.js')

Temperature.MultiByKelvin(10).then(res => {
    // Multi Convert 10 Kelvin 
    console.log(res)
    /*{
        celsius: -263.15,
        fahrenheit: -441.66999999999996,
        reamur: -210.51999999999998
    }*/
})
```
## Reamur
Reamur To Celsius Method:
```js
const Temperature = require('node-temperature.js')

Temperature.ReamurToCelsius(10).then(res => {
    // Convert 10 Reamur to Celsius
    console.log(res); // 12.5
})
```
Reamur To Fahrenheit Method:
```js
const Temperature = require('node-temperature.js')

Temperature.ReamurToFahrenheit(10).then(res => {
    // Convert 10 Reamur to Celsius
    console.log(res); // 54.5
})
```
Reamur To Kelvin Method:
```js
const Temperature = require('node-temperature.js')

Temperature.ReamurToKelvin(10).then(res => {
    console.log(res) // 285.65
})
```
Multi Convert By Reamur:
```js
const Temperature = require('node-temperature.js')

Temperature.MultiByReamur(10).then(res => {
    // Multi Convert 10 Reamur
    console.log(res)

    /*{
        celsius: 12.5,
        fahrenheit: 54.5,
        kelvin: 285.65
    }*/
})
```