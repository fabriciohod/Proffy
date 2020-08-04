import express from 'express';
const app = express();

app.use(express.json());

app.post('/users', (req, res) =>
{
    console.log(req.body);
    const users = [
        { nome: 'fabricio', idade: 20 }
    ];
    return res.json(users);
});

app.listen(3333);