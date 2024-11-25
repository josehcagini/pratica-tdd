export default class InvalidDiscountException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidDiscountException';
  }
}
