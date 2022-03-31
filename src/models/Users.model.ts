import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';

class UsersModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async create(username: string, classe: string, level: number, password: string) {
    const query = `INSERT INTO Trybesmith.Users 
    (username, classe, level, password) VALUES (?, ?, ?, ?)`;
    const [user] = await this.connection.execute<ResultSetHeader>(
      query,
      [username, classe, level, password],
    );
    const { insertId } = user;
    return { id: insertId, username, classe, level };
  }
}

export default UsersModel;