export default class InvalidProductException extends Error {
  constructor(productName: string) {
    super(`Product ${productName} has an invalid price or quantity`);
    this.name = 'InvalidProductException';
  }
}
