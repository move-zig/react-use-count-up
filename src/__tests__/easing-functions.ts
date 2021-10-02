import * as EasingFunctions from '../easing-functions';

describe('Easing Functions', () => {

  describe('linear', () => {

    it('should return linear values', () => {
      expect(EasingFunctions.linear(0, 10, 44, 88)).toBe(10);
      expect(EasingFunctions.linear(88, 10, 44, 88)).toBe(54);
      expect(EasingFunctions.linear(24, 10, 44, 88)).toBe((24 / 88 * 44) + 10);
    });
  });

  describe('easeOutExpo', () => {

    it('should return exponential values', () => {
      expect(EasingFunctions.easeOutExpo(0, 10, 44, 88)).toBe(10);
      expect(Math.round(EasingFunctions.easeOutExpo(88, 10, 44, 88))).toBe(54);
      expect(Math.round(EasingFunctions.easeOutExpo(24, 10, 44, 88))).toBe(47);
    });
  });
});
