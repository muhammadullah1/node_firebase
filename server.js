const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require('./src/routes/user.route');
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ 'message': 'ok' });
});

app.use('/users', userRouter);


app.listen(4000, () => {
  console.log('Server started on port 4000');
});