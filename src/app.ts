import express from 'express';
import ProductsController from './controllers/Products.controller';

const controller: ProductsController = new ProductsController(); 
const app = express();

app.use(express.json());

app.get('/products', controller.findAll);

export default app;