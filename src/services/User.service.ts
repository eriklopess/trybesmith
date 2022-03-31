import { IUser } from '../interface/IUser';
import UsersModel from '../models/Users.model';

class UserService {
  private model: UsersModel;

  constructor() {
    this.model = new UsersModel();
  }

  async create(userInfo: IUser): Promise<IUser> {
    const { username, classe, level, password } = userInfo;
    const user = await this.model.create(username, classe, level, password);
    return user as IUser;
  }
}

export default UserService;