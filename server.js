import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log('server running');
});

app.get('/api', (req, res) => {
  res.status(200).send('Funcionou');
});