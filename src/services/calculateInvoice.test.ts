import calculateInvoice from './calculateInvoice';

describe('calculateInvoice', () => {
  it('should return 0', () => {
    expect(calculateInvoice([], 0)).toBe(0);
  });
});
