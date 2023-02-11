import React from 'react';

function toCelsius(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

function toFahrenheit(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

function tryConvert(
  temperature: string,
  convert: (input: number) => number
): any {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export { tryConvert, toCelsius, toFahrenheit };
