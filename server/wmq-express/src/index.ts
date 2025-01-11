import express from 'express';
const app = express();
const port = 19527;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});
