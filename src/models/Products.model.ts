import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interface/IProduct';
import connection from './connection';

class ProductsModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async findAll(): Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [products] = await this.connection.execute(query);
    return products as IProduct[];
  }

  async create(name: string, amount: string): Promise<IProduct> {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [product] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const { insertId } = product;
    return { id: insertId, name, amount };
  }
}

export default ProductsModel;
