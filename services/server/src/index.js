const PORT = 8000
const app = require('express')();
const axios = require('axios');
const cheerio = require('cheerio');

const articles = []
const websiteSources = 
[
    {
        name: 'Virtual Runner',
        baseUrl: 'https://www.virtualrunneruk.com/',
        url: 'races/',
        dataDiv: '.race-item',
        titleDiv: '.card--race__title',
        imageDiv: '.card--race__medal',
        linkDiv: 'a'
    },
    {
        name: 'RunR',
        baseUrl: 'https://virtual.runr.co.uk/',
        url: '15/events',
        dataDiv: '.fifteen',
        titleDiv: 'h4',
        imageDiv: 'img',
        linkDiv: 'a'
    },
    {
        name: 'Race the Distance',
        baseUrl: 'https://racethedistance.com/',
        url: 'collections/all-current-challenges?gclid=Cj0KCQjw8_qRBhCXARIsAE2AtRYoHaMzTiEhtTJ1oF4isnaAb_3H5fW9ZotIHnwHvirQJt5sh-KYq10aAvrbEALw_wcB',
        dataDiv: '.grid-view-item',
        titleDiv: 'h4',
        imageDiv: 'img',
        linkDiv: 'a'
    }
    
]


websiteSources.forEach(website => {
const url = (website.baseUrl + website.url)
const dataDiv = website.dataDiv
const titleDiv = website.titleDiv
const imageDiv = website.imageDiv
const linkDiv = website.linkDiv


const requestData = async () => {
    try {
        const res = await axios.get(url)
        const status = await res.status
        const html = await res.data
        const $ = cheerio.load(html)

if(status === 200){
        $(`${dataDiv}`,html).each(function () {
            const title = $(this).find(`${titleDiv}`).text()
            const image = $(this).find(`${imageDiv}`).attr('src')
            const url = $(this).find(`${linkDiv}`).attr('href')
        
            articles.push({
                title,
                url,
                image,
                source: website.name
            })
            
        }) 
    }else{
    console.log('An error has occurred')}
} catch (err) {
    console.error(err)
}
}

requestData()
})

app.get('/', (req, res) => {
    
res.json(articles)
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
