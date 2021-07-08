const path = require('path');
const express = require('express');
const router = require('./router');

const PORT = 3000;

// express configuration
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'hbs');
app.use('/', router);

// start server
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
