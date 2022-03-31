import express from 'express';
import OrdersController from './controllers/Orders.controller';
import ProductsController from './controllers/Products.controller';
import UsersController from './controllers/Users.controller';
import validator from './middlewares/validator';
import products from './schemas/products';
import users from './schemas/users';

const PController: ProductsController = new ProductsController();
const UController: UsersController = new UsersController();
const OController: OrdersController = new OrdersController();
const app = express();

app.use(express.json());

app.get('/products', PController.findAll);
app.post('/products', validator(products), PController.create);
app.post('/users', validator(users), UController.create);
app.get('/orders', OController.findAll);

export default app;