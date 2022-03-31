import { Pool } from 'mysql2/promise';
import connection from './connection';

class ProductsModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async findAll() {
    const products = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return products;
  }
}

export default ProductsModel;
