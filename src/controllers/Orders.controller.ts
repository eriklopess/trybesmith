import { Request, Response } from 'express';
import OrdersService from '../services/Orders.service';

class OrdersControllers {
  private service: OrdersService;

  constructor() {
    this.service = new OrdersService();
  }

  public findAll = async (_req: Request, res: Response) => {
    const orders = await this.service.findAll();
    console.log(orders);
    
    res.status(200).json(orders);
  };
}

export default OrdersControllers;