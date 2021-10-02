import { useEffect, useState } from 'react';
import { easeInCubic, easeInExpo, easeInQuad, easeInQuart, easeInQuint, easeOutCubic, easeOutExpo, easeOutQuad, easeOutQuart, easeOutQuint, EasingFunction, linear } from './easing-functions';

type EasingFunctionName =
  'linear' |
  'easeOutExpo' |
  'easeInExpo' |
  'easeOutQuad' |
  'easeInQuad' |
  'easeOutCubic' |
  'easeInCubic' |
  'easeOutQuart' |
  'easeInQuart' |
  'easeOutQuint' |
  'easeInQuint';

export type CountUpProperties = {
  start: number;
  end: number;
  duration: number;
  started: boolean;
  formatter?: (value: number) => string;
  /** the easing function to use, default: easeOutExpo */
  easingFunction?: EasingFunction | EasingFunctionName;
};

const fps = 60;
const intervalDelay = Math.round(1 / fps * 1000);

export const useCountUp = ({ start, end, duration, started, formatter, easingFunction }: CountUpProperties): string => {
  const [ value, setValue ] = useState(start);

  useEffect(() => {
    if (started) {

      // determine the easing function to use
      let fn: EasingFunction;
      if (typeof easingFunction === 'function') {
        fn = easingFunction;
      } else if (easingFunction === 'linear') {
        fn = linear;
      } else if (easingFunction === 'easeOutExpo') {
        fn = easeOutExpo;
      } else if (easingFunction === 'easeInExpo') {
        fn = easeInExpo;
      } else if (easingFunction === 'easeOutQuad') {
        fn = easeOutQuad;
      } else if (easingFunction === 'easeInQuad') {
        fn = easeInQuad;
      } else if (easingFunction === 'easeOutCubic') {
        fn = easeOutCubic;
      } else if (easingFunction === 'easeInCubic') {
        fn = easeInCubic;
      } else if (easingFunction === 'easeOutQuart') {
        fn = easeOutQuart;
      } else if (easingFunction === 'easeInQuart') {
        fn = easeInQuart;
      } else if (easingFunction === 'easeOutQuint') {
        fn = easeOutQuint;
      } else if (easingFunction === 'easeInQuint') {
        fn = easeInQuint;
      } else {
        fn = easeOutExpo; // default
      }

      let time = 0;
      const change = end - start;

      const intervalId = setInterval(() => {
        // check to see if we're at the end
        if (time >= duration) {
          setValue(end); // skip the calculation and use the end number directly
          clearInterval(intervalId); // we don't need the interval anymore
          return;
        }

        // set the new value based on the easing function
        setValue(fn(time, start, change, duration));

        // increase the time value based on the interval delay
        time += intervalDelay;
      }, intervalDelay);

      // clear the interval on unmount/props change
      return () => clearInterval(intervalId);
    }
  }, [ start, end, duration, started, easingFunction ]);

  return formatter ? formatter(value) : value.toFixed(0);
};
