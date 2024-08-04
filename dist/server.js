const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { body: '<h1 class="mt-4">Home</h1><p>Home page content</p>' });
});

app.get('/faqs', (req, res) => {
    res.render('index', { body: '<h1 class="mt-4">FAQs</h1><p>FAQs page content</p>' });
});

// Repeat for other pages

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
