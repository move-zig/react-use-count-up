export type EasingFunction = (t: number, b: number, c: number, d: number) => number;

export const linear: EasingFunction = (t, b, c, d) => {
  return (c * t / d) + b;
};

export const easeOutExpo: EasingFunction = (t, b, c, d) => {
  return (c * (-Math.pow(2, -10 * t / d) + 1)) + b;
};

export const easeInExpo: EasingFunction = (t, b, c, d) => {
  return (c * Math.pow(2, 10 * ((t / d) - 1))) + b;
};

export const easeOutQuad: EasingFunction = (t, b, c, d) => {
  return (-c * (t /= d) * (t - 2)) + b;
};

export const easeInQuad: EasingFunction = (t, b, c, d) => {
  t /= d;
  return (c * t * t) + b;
};

export const easeOutCubic: EasingFunction = (t, b, c, d) => {
  t /= d;
  t--;
  return (c * ((t * t * t) + 1)) + b;
};

export const easeInCubic: EasingFunction = (t, b, c, d) => {
  t /= d;
  return (c * t * t * t) + b;
};

export const easeOutQuart: EasingFunction = (t, b, c, d) => {
  t /= d;
  t--;
  return (-c * ((t * t * t * t) - 1)) + b;
};

export const easeInQuart: EasingFunction = (t, b, c, d) => {
  t /= d;
  return (c * t * t * t * t) + b;
};

export const easeOutQuint: EasingFunction = (t, b, c, d) => {
  t /= d;
  t--;
  return (c * ((t * t * t * t * t) + 1)) + b;
};

export const easeInQuint: EasingFunction = (t, b, c, d) => {
  t /= d;
  return (c * t * t * t * t * t) + b;
};

export const easeOutPoly = (n: number): EasingFunction => {
  if (n <= 1) { return linear; } // use the faster implementation
  if (n <= 2) { return easeOutQuad; } // use the faster implementation
  // use the general-purpose function
  n = Math.round(n);
  const x = n % 2 === 0 ? -1 : 1;
  return (t, b, c, d) => {
    t /= d;
    t--;
    return (c * x * ((t ** n) + x)) + b;
  };
};

export const easeInPoly = (n: number): EasingFunction => {
  if (n <= 1) { return linear; } // use the faster implementation
  if (n <= 2) { return easeInQuad; } // use the faster implementation
  // use the general-purpose function
  n = Math.round(n);
  return (t, b, c, d) => {
    t /= d;
    return (c * (t ** n)) + b;
  };
};
