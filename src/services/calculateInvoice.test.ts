import InvalidDiscountException from '../types/error/invalidDiscountException';
import InvalidProductException from '../types/error/InvalidProductException';
import { Product } from '../types/product';
import calculateInvoice from './calculateInvoice';

const mockedEmptyProductList: Array<Product> = [];

const mockedValidProductList: Array<Product> = [
  {
    name: 'Product 1',
    price: 10,
    quantity: 1,
  },
  {
    name: 'Product 2',
    price: 20,
    quantity: 2,
  },
  {
    name: 'Product 3',
    price: 30,
    quantity: 3,
  },
];

const mockedInvalidPriceProductList: Array<Product> = [
  {
    name: 'Product 1',
    price: -10,
    quantity: 1,
  },
  {
    name: 'Product 2',
    price: 20,
    quantity: 2,
  },
  {
    name: 'Product 3',
    price: 30,
    quantity: 3,
  },
];

const mockedInvalidQuantityProductList: Array<Product> = [
  {
    name: 'Product 1',
    price: 10,
    quantity: 1,
  },
  {
    name: 'Product 2',
    price: 20,
    quantity: 2,
  },
  {
    name: 'Product 3',
    price: 30,
    quantity: -3,
  },
];

describe('calculateInvoice', () => {
  it('1 - dado uma lista vazia de produtos, deve retornar o valor da fatura igual a zero ', () => {
    const discount = 0;
    const expectedValue = 0;

    expect(calculateInvoice(mockedEmptyProductList, discount)).toBe(
      expectedValue,
    );
  });

  it('2 - dado uma lista de produtos e desconto zerado, deve retornar o valor da fatura igual a soma dos preços unitarios vezes a quantidade (140)', () => {
    const discount = 0;
    const expectedValue = 140;

    expect(calculateInvoice(mockedValidProductList, discount)).toBe(
      expectedValue,
    );
  });

  it('3 - dado uma lista de produtos e um desconto de 10%, deve retornar o valor da fatura igual a soma dos preços unitarios vezes a quantidade menos 10% do valor total (126)', () => {
    const discount = 10;
    const expectedValue = 126;

    expect(calculateInvoice(mockedValidProductList, discount)).toBe(
      expectedValue,
    );
  });

  it('4 - dado uma lista de produtos e um desconto maior que 100 ou menor que 0, deve retornar um erro de InvalidDiscountException', () => {
    const negativeDiscount = -10;
    const surpassDiscount = 110;

    const expectedValue = InvalidDiscountException;

    expect(calculateInvoice(mockedValidProductList, negativeDiscount)).toThrow(
      expectedValue,
    );

    expect(calculateInvoice(mockedValidProductList, surpassDiscount)).toThrow(
      expectedValue,
    );
  });

  it('5 - dado uma lista de produtos com preço menor igual a zero e um dado desconto, deve retornar um erro de InvalidProductException', () => {
    const discount = 10;
    const expectedValue = InvalidProductException;

    expect(calculateInvoice(mockedInvalidPriceProductList, discount)).toThrow(
      expectedValue,
    );
  });

  it('6 - dado uma lista de produtos com quantidade menor igual a zero e um dado desconto, deve retornar um erro de InvalidProductException', () => {
    const discount = 10;
    const expectedValue = InvalidProductException;

    expect(
      calculateInvoice(mockedInvalidQuantityProductList, discount),
    ).toThrow(expectedValue);
  });
});
