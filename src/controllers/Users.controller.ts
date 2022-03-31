import { Request, Response } from 'express';
import token from '../helpers/jwtGenerator';
import UserService from '../services/User.service';

class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public create = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;
    const user = await this.service.create({ username, classe, level, password });
    const tokenGenerated = token({ id: user.id as number, username: user.username });
    res.status(201).json({ token: tokenGenerated });
  };
}

export default UserController;
