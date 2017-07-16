const app = require('./config/express-config')();
const port = process.env.PORT || 4040;

app.listen(port, () => {
  console.log('Servidor rodando na porta: ', port);
});
