import { Product } from '../types/product';

import InvalidDiscountException from '../types/error/invalidDiscountException';
import InvalidProductException from '../types/error/InvalidProductException';

export default function calculateInvoice(
  products: Array<Product>,
  discount: number,
): number {
  if (discount > 100 || discount < 0) {
    throw new InvalidDiscountException();
  }

  if (products.length === 0) {
    return 0;
  }

  const total = products.reduce((acc, product) => {
    if (product.price <= 0 || product.quantity <= 0) {
      throw new InvalidProductException(product.name);
    }
    return acc + product.price * product.quantity;
  }, 0);

  return total - (total * discount) / 100;
}
