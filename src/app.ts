import express from 'express';

class App {
  private app = express.application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
  }

  listen(port: number) {
    this.app.listen(port, () => {
      console.log(`Rodando na porta: ${port}`);
    });
  }
}

export default new App();
