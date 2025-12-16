import express from 'express';

const app = express();
const PORT = 3000;

/* Middleware */
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toLocaleString()}`);
  next();
});

/* Serve static files */
app.use(express.static('public'));

/* Routes */
app.get('/', (req, res) => {
  res.send('Welcome to my Express App');
});

app.get('/about', (req, res) => {
  res.send('About: Express server project');
});

app.get('/contact', (req, res) => {
  res.sendFile(new URL('./public/contact.html', import.meta.url));
});

/* 🌤 Weather Route */
app.get('/weather/:city', (req, res) => {
  const { city } = req.params;
  res.json({
    city,
    temp: '30°C'
  });
});

/* 👤 Users API */
let users = [
  { id: 1, name: 'Rahul' },
  { id: 2, name: 'Amit' }
];

/* GET users */
app.get('/api/users', (req, res) => {
  res.json(users);
});

/* POST user */
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

/* Start server */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
