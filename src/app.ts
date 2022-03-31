import express from 'express';
import ProductsController from './controllers/Products.controller';
import validator from './middlewares/validator';
import products from './schemas/products';

const controller: ProductsController = new ProductsController(); 
const app = express();

app.use(express.json());

app.get('/products', controller.findAll);
app.post('/products', validator(products), controller.create);

export default app;