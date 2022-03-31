import { Request, Response } from 'express';
import ProductsService from '../services/Products.service';

class ProductController {
  constructor(private product = new ProductsService()) { }

  public findAll = async (_req: Request, res: Response) => {
    const products = await this.product.findAll();
    res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const product = await this.product.create({ name, amount });
    res.status(201).json({ item: { ...product } });
  };
}
export default ProductController;