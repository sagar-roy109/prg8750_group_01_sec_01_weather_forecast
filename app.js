const express = require('express');
const collection = require('./mongo');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/login', cors(), (req, res) => {});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      // res.json("exist")
      const pass = await collection.find(
        {
          email,
        },
        {
          _id: 0,
          password: 1,
        }
      );
      res.json(pass);
    } else {
      res.json('notexist');
    }
  } catch (e) {
    res.json('notexist');
    console.log(e);
  }
});

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const data = {
    email: email,
    password: password,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json('exist');
    } else {
      res.json('notexist');
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json('notexist');
    console.log(e);
  }
});

app.listen(8001, () => {
  console.log('port connected to 8001');
});
