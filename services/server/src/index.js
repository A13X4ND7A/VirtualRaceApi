const PORT = 8000
const app = require('express')();
const axios = require('axios');
const cheerio = require('cheerio');

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
