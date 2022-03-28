const axios = require('axios');
const cheerio = require('cheerio');
const websiteSources = require('../sources')

const articles = []

const getData = async (req, res, next) => {
websiteSources.forEach(website => {
const url = (website.baseUrl + website.url)
const dataDiv = website.dataDiv
const titleDiv = website.titleDiv
const imageDiv = website.imageDiv
const linkDiv = website.linkDiv
const price = website.price


        axios.get(url)
        .then( response => {
        const html = response.data
        const $ = cheerio.load(html)

        $(`${dataDiv}`,html).each(function () {
            const title = $(this).find(`${titleDiv}`).text()
            const image = $(this).find(`${imageDiv}`).attr('src')
            const url = $(this).find(`${linkDiv}`).attr('href')
            const racePrice = $(this).find(`${price}`).text()
        
            articles.push({
                title,
                url,
                image,
                racePrice,
                source: website.name
            })
        })
    })
    res.locals.articles = articles
       
})

next()
}

module.exports = getData
