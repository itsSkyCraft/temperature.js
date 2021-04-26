module.exports = class Temperature{

    /**
     * 
     * @param {Number} celsius - A Valid Celsius
     * @param {Number} fahrenheit - A Valid Fahrenheit
     * @param {Number} kelvin - A Valid Kelvin
     * @param {Number} reamur - A Valid Reamur
     */

    static async CelsiusToFahrenHeit(celsius){
        if(isNaN(celsius)) throw new TypeError('The Given Celsius is Not a Number!!');

        return (celsius * (9 / 5)) + 32;
    }
    static async FahrenheitToCelsius(fahrenheit){
        if(isNaN(fahrenheit)) throw new TypeError('The Given Fahrenheit is Not a Number!!');

        return (fahrenheit - 32) * (5/9);
    }
    static async CelsiusToKelvin(celsius){
        if(isNaN(celsius)) throw new TypeError('The Given Celsius is Not a Number!!');

        return celsius + 273.15;
    }
    static async KelvintoCelsius(kelvin){
        if(isNaN(kelvin)) throw new TypeError('The Given Kelvin is Not a Number!!');

        return kelvin - 273.15;
    }
    static async FahrenheitToKelvin(fahrenheit){
        if(isNaN(fahrenheit)) throw new TypeError('The Given Fahrenheit is Not a Number!!');

        return ((fahrenheit - 32) * (5/9)) + 273.15;
    }
    static async KelvintoFahrenheit(kelvin){
        if(isNaN(kelvin)) throw new TypeError('The Given Kelvin is Not a Number!!');

        return (kelvin - 273.15) * (9 / 5) + 32;
    }
    static async ReamurToCelsius(reamur){
        if(isNaN(reamur))throw new TypeError('The Given Reamur is Not a Number!!');

        return reamur * 1.25;
    }
    static async CelsiusToReamur(celsius){
        if(isNaN(celsius)) throw new TypeError('The Given Celsius is Not a Number!!');

        return celsius * 0.8;
    }
    static async ReamurToFahrenheit(reamur){
        if(isNaN(reamur))throw new TypeError('The Given Reamur is Not a Number!!');

        return (reamur * 1.25) * (9/5) + 32;
    }
    static async FahrenheitToReamur(fahrenheit){
        if(isNaN(fahrenheit)) throw new TypeError('The Given Fahrenheit is Not a Number!!');

        return ((fahrenheit - 32) * (5/9)) * 0.8;
    }
    static async ReamurToKelvin(reamur){
        if(isNaN(reamur))throw new TypeError('The Given Reamur is Not a Number!!');

        return reamur * 1.25 + 273.15;
    }
    static async KelvintoReamur(kelvin){
        if(isNaN(kelvin)) throw new TypeError('The Given Kelvin is Not a Number!!');

        return (kelvin - 273.15) * 0.8
    }
    static async MultiByCelsius(celsius){
        if(isNaN(celsius)) throw new TypeError('The Given Celsius is Not a Number!!');

        return {
            fahrenheit: (celsius * (9 / 5)) + 32,
            kelvin: celsius + 273.15,
            reamur: celsius * 0.8
        }
    }
    static async MultiByFahrenheit(fahrenheit){
        if(isNaN(fahrenheit)) throw new TypeError('The Given Fahrenheit is Not a Number!!');

        return {
            celcius: (fahrenheit - 32) * (5/9),
            kelvin: ((fahrenheit - 32) * (5/9)) + 273.15,
            reamur: ((fahrenheit - 32) * (5/9)) * 0.8
        }
    }
    static async MultiByKelvin(kelvin){
        if(isNaN(kelvin)) throw new TypeError('The Given Kelvin is Not a Number!!');

        return {
            celcius: kelvin - 273.15,
            fahrenheit: (kelvin - 273.15) * (9 / 5) + 32,
            reamur: (kelvin - 273.15) * 0.8
        }
    }
    static async MultiByReamur(reamur){
        if(isNaN(reamur))throw new TypeError('The Given Reamur is Not a Number!!');

        return {
            celcius: reamur * 1.25,
            fahrenheit: (reamur * 1.25) * (9/5) + 32,
            kelvin: reamur * 1.25 + 273.15
        }
    }
}