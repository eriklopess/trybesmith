import { Request, Response } from 'express';
import ProductsService from '../services/Products.service';

class ProductController {
  constructor(private product = new ProductsService()) { }

  public findAll = async (_req: Request, res: Response) => {
    const [products] = await this.product.findAll();
    res.status(200).json(products);
  };
}
export default ProductController;