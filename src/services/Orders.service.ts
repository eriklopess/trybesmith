import OrdersModel from '../models/Orders.model';

class UserService {
  private model: OrdersModel;

  constructor() {
    this.model = new OrdersModel();
  }

  async findAll() {
    const user = await this.model.findAll();
    return user;
  }
}

export default UserService;