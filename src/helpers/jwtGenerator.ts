import jwt from 'jsonwebtoken';
import { IToken } from '../interface/IToken';

const token = ({ id, username }: IToken) => jwt.sign({ id, username }, 'xablau', {
  expiresIn: '7d',
});

export default token;