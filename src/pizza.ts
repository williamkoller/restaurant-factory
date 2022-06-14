import { Product } from './interface/product.interface';

export class Pizza implements Product {
  public operation(): string {
    return 'Pizza: Results';
  }
}
