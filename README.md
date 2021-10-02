# react-use-count-up

A React hook with Typescript typings for animating a number counting up

## Installation

```
npm i react-use-count-up
```

## Usage

```javascript
import { useCountUp } from 'react-use-count-up';

const MyComponent = () => {
  const value = useCountUp({ start: 0, end: 42, duration: 500 });

  return (
    <>{value}</>
  );
}
```

## Options

`useCountUp` takes a configuration object with the following keys:

### start
the number to start with

### end
the number to end at

### duration
the duration of the animation in miliseconds

### started (optional)
whether the animation has started or not

default `true`

```javascript
import { useState } from 'react';
import { useCountUp } from 'react-use-count-up';


const MyComponent = () => {
  const [ started, setStarted ] = useState(false);
  const value = useCountUp({ start: 0, end: 42, duration: 500, started });

  return (
    <>
      <div>Value: {value}</div>
      <button onClick={() => setStarted(true)}>Start</button>
    </>
  );
}
```

### formatter (optional)
a function in the form `(value: number) => string` to be applied to the return value

default `v => v.toFixed(0)`

> 📝 If supplying a formatter function, ensure that you provide a constant reference to the useCountUp hook. To prevent unintended re-renders, either create the function outside your component, or memoize it

```javascript
import { useCountUp } from 'react-use-count-up';

// declared outside the component
const formatter = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format

const MyComponent = () => {
  const value = useCountUp({ start: 0, end: 42, duration: 500, formatter });

  return (
    <>{value}</>
  );
}
```

### easingFunction (optional)
a custom easing function in the form `(t: number, b: number, c: number, d: number) => number` or a string that equals one of the [built-in easing functions](#built-in-easing-functions) used to be used to calculate the return value

default `'easeOutExpo'`

> 📝 If supplying an easing function, ensure that you provide a constant reference to the useCountUp hook. To prevent unintended re-renders, either create the function outside your component, or memoize it.

```javascript
import { useCountUp } from 'react-use-count-up';

// declared outside the component
const easeOutCirc = (t, b, c, d) => {
  t /= d;
  t--;
  return c * Math.sqrt(1 - t * t) + b;
};

const MyComponent = () => {
  const value = useCountUp({ start: 0, end: 42, duration: 500, easingFunction: easeOutCirc });

  return (
    <>{value}</>
  );
}
```

## Easing

### Built-in Easing Functions

* linear
* easeOutExpo
* easeInExpo
* easeOutQuad
* easeInQuad
* easeOutCubic
* easeInCubic
* easeOutQuart
* easeInQuart
* easeOutQuint
* easeInQuint

To use one of these built-in easing functions, supply a string to the configuration object

```javascript
const options = {
  start: 3,
  end: 99,
  duration: 2000,
  easingFunction: 'easeOutCubic',
  ...
}
```

### Custom Easing Functions

Custom easing functions take the following paramters:

t: the amount of time elapsed
b: the start value
c: the total change (i.e. `end - start`)
d: the total duration

They return the how far through the animation we are, from `0` to `1`.

E.g.,

```javascript
const easeOutExpo = (t, b, c, d) => {
  return (c * (-Math.pow(2, -10 * t / d) + 1)) + b;
};
```

### Custom Polynomial Higher-Order Function

You can use the custom polynomial higher-order functions `easeOutPoly` or `easeInPoly` to create a polynomial easing function of degree n (n = 1 is equivalent to linear, n = 2 is equivalent to quadradic, n = 3 is equivalent to cubic, etc.).

```javascript
import { easeOutPoly, useCountUp } from 'react-use-count-up';

const easeOutSeptic = easeOutPoly(7);

const MyComponent = () => {
  const value = useCountUp({ start: 0, end: 42, duration: 500, easingFunction: easeOutSeptic });

  return (
    <>{value}</>
  );
}
```

