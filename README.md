
# TrybeSmith
## Stack utilizada

**Linguagens:** Node e TypeScript.

**Libs:** Joi e JsonWebToken.

**Banco de dados:** MySQL.



## Documentação da API

#### Retorna todos os produtos

```http
  GET /products
```
#### Cria um produto

```http
  POST /products
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name` | `string` | **Obrigatório**. nome do item. |
| `amount` | `string` | **Obrigatório**. quantidade desse item. |
| `orderId` | `int` | **Obrigatório**. id do pedido.

#### Cria um usuário
```http
  POST /user
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `username`      | `string` | **Obrigatório**. O nome que você deseja usar.  |
| `classe` | `string` | **Obrigatório**. A classe que você deseja usar.|
| `level` | `int` | **Obrigatório**. level do seu personagem. |
| `password`| `string` | **Obrigatório**. senha usada para acessar o seu personagem.| 

**Retorna um Token**


## Uso

Para fazer o uso desse projeto

**Instale as dependencias.**
```bash
  npm install
```

**Adicione as váriaveis no arquivo .env.**

| Nome   |  Descrição                                   |
| :---------- | :------------------------------------------ |
| `MYSQL_HOST` | **Obrigatório**. ip do banco de dados |
| `MYSQL_USER` | **Obrigatório**. usuário do banco de dados |
| `MYSQL_PASSWORD` | **Obrigatório**. senha do usuário.


**Adicione o arquivo `Trybesmith.sql` ao banco de dados**

**Para iniciar use:**

```bash
  npm start
```

