export default class InvalidDiscountException extends Error {
  constructor() {
    super('Discount must be between 0 and 100');
    this.name = 'InvalidDiscountException';
  }
}
