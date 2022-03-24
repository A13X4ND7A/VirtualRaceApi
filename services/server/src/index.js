const PORT = 8000
const app = require('express')();
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.virtualrunneruk.com/races/?rfm='

app.get('/', (req, res) => {
    res.json("Hello World")
})
// axios(url)
// .then(response => {
//     const html = response.data
//     const src = cheerio.load(html)
//     const articles = []
// src('.race-item', html).each(function() {
//     const title = src(this).find('.card--race__title').text()
//     const url = src(this).find('a').attr('href')
//     articles.push({
//         title,
//         url
//     })
  
// }).catch(err => {
// console.log(err)
// })


// })


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
