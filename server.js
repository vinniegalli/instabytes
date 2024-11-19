import express from 'express';

const posts = [
  {
    id: 1,
    description: 'Uma foto teste',
    img: 'https://placecats.com/millie/300/150'
  },
  {
    id: 2,
    description: 'Gato fazendo yoga',
    img: 'https://placecats.com/millie/300/150'
  },
  {
    id: 3,
    description: 'Gato dormindo',
    img: 'https://placecats.com/millie/300/150'
  },
  {
    id: 4,
    description: 'Gato explorando caixa',
    img: 'https://placecats.com/millie/300/150'
  },
];

const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log('server running');
});

app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

function buscaPostPorID(id){
  return posts.findIndex((post) => {
    return post.id === Number(id)
  });
}

app.get('/posts/:id', (req, res) => {
  const index = buscaPostPorID(req.params.id)
  res.status(200).json(posts[index]);
});