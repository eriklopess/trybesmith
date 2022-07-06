import { Pool } from 'mysql2/promise';
import connection from './connection';

class OrdersModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async findAll() {
    const query = `SELECT DISTINCT o.id, o.userId, JSON_ARRAYAGG(p.id) as products
    FROM Trybesmith.Orders AS o INNER JOIN Trybesmith.Products AS p WHERE p.orderId = o.id
    GROUP BY o.id ORDER BY o.userId;`;
    const [orders] = await this.connection.execute(query);
    return orders;
  }
}

export default OrdersModel;