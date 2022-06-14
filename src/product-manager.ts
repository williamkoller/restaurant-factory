import { Burguer } from './burger';
import { PRODUCT_TYPE } from './enum/product.type';
import { Product } from './interface/product.interface';
import { Pizza } from './pizza';

export class ProductManager {
  constructor() {}
  createProduct(type: PRODUCT_TYPE): Product {
    switch (type) {
      case PRODUCT_TYPE.PIZZA:
        return new Pizza();
      case PRODUCT_TYPE.BURGER:
        return new Burguer();
      default:
        throw new Error('Error: Product invalid!');
    }
  }
}
