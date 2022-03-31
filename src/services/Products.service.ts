import ProductModel from '../models/Products.model';

class ProductsService {
  private model: ProductModel;
 
  constructor() {
    this.model = new ProductModel();
  }

  public async findAll() {
    const products = await this.model.findAll();
    return products;
  }
}

export default ProductsService;