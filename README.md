# react-use-count-up

A React hook for animating a number counting up

## Installation

```
npm i react-use-count-up
```

## Usage

```
import { useCountUp } from 'react-use-count-up';

const MyComponent = (): ReactElement => {
  const value = useCountUp({ start: 0, end: 42, duration: 500 });

  return (
    <>{value}</>
  );
}
```

## Options

`useCountUp` takes a configuration object with the following keys:

start
: the number to start with

end
: the number to end at

duration
: the duration of the animation in miliseconds

started (optional, default `true`)
: whether the animation has started or not

formatter (optional, default `v => v.toFixed(0)`)
: a function in the form `(value: number) => string` to be applied to the return value

> 📝 If supplying a formatter function, ensure that you provide a constant reference to the useCountUp hook. Either create the function outside your component, or memoize it.

```
import { useCountUp } from 'react-use-count-up';

const formatter = v => v < 4 ? 0 : v; // declared outside the component

const MyComponent = (): ReactElement => {
  const value = useCountUp({ start: 0, end: 42, duration: 500, formatter });

  return (
    <>{value}</>
  );
}
```

easingFunction (optional, default `'easeOutExpo'`)
: a function in the form (t: number, b: number, c: number, d: number) => number or a string value for one of the [built-in easing functions](#built-in-easing-functions) used to be used to calculate the return value

> 📝 If supplying an easing function, ensure that you provide a constant reference to the useCountUp hook. Either create the function outside your component, or memoize it.

```
import { useCountUp } from 'react-use-count-up';

// declared outside the component
const easeOutCirc = (t, b, c, d) => {
	t /= d;
	t--;
	return c * Math.sqrt(1 - t * t) + b;
};

const MyComponent = (): ReactElement => {
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

```
{
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

```
const easeOutExpo = (t, b, c, d) => {
  return (c * (-Math.pow(2, -10 * t / d) + 1)) + b;
};
```

### Custom Polynomial Higher-Order Function

You can use the custom polynomial higher-order functions `easeOutPoly` or `easeInPoly` to create a polynomial easing function of degree n (n = 1 is equivalent to linear, n = 2 is equivalent to quadradic, n = 3 is equivalent to cubic, etc.).

```
import { easeOutPoly, useCountUp } from 'react-use-count-up';

const easeOutSeptic = easeOutPoly(7);

const MyComponent = (): ReactElement => {
  const value = useCountUp({ start: 0, end: 42, duration: 500, easingFunction: easeOutSeptic });

  return (
    <>{value}</>
  );
}
```

