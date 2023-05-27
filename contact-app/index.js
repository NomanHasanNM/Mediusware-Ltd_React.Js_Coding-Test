const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
const API_ENDPOINT = 'https://contact.mediusware.com/api/contacts';
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/contacts', async (req, res) => {
  try {
    const { page, country, search } = req.query;
    const queryParams = {
      page: page || 1,
      country: country || '',
      search: search || '',
    };
    const response = await axios.get(API_ENDPOINT, { params: queryParams });
    const contacts = response.data.contacts;
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'An error occurred while fetching contacts' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
