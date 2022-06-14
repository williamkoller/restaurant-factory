import { Product } from './interface/product.interface';

export class Burguer implements Product {
  public operation(): string {
    return 'Burger: Results';
  }
}
