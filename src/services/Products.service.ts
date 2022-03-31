import { IProduct } from '../interface/IProduct';
import ProductModel from '../models/Products.model';

class ProductsService {
  private model: ProductModel;
 
  constructor() {
    this.model = new ProductModel();
  }

  public async findAll(): Promise<IProduct[]> {
    const products = await this.model.findAll() as IProduct[];
    return products;
  }

  public async create(productInfo: IProduct): Promise<IProduct> {
    const { name, amount } = productInfo;
    const product = await this.model.create(name, amount);
    return product;
  }
}

export default ProductsService;