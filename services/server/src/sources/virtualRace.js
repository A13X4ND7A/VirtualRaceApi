const websiteSources = 
[
    {
        name: 'Virtual Runner',
        id: 'virtualrunner',
        baseUrl: 'https://www.virtualrunneruk.com/',
        url: 'races/',
        dataDiv: '.race-item',
        titleDiv: '.card--race__title',
        imageDiv: '.card--race__medal',
        linkDiv: 'a',
        price: '.amount'
    },
    {
        name: 'RunR',
        id: 'runr',
        baseUrl: 'https://virtual.runr.co.uk/',
        url: '15/events',
        dataDiv: '.fifteen',
        titleDiv: 'h4',
        imageDiv: 'img',
        linkDiv: 'a',
        price: 'h5'
    },
    {
        name: 'Race the Distance',
        id: 'racethedistance',
        baseUrl: 'https://racethedistance.com/',
        url: 'collections/all-current-challenges?gclid=Cj0KCQjw8_qRBhCXARIsAE2AtRYoHaMzTiEhtTJ1oF4isnaAb_3H5fW9ZotIHnwHvirQJt5sh-KYq10aAvrbEALw_wcB',
        dataDiv: '.grid-view-item',
        titleDiv: 'h4',
        imageDiv: 'img',
        linkDiv: 'a',
        price: '.product-price__price'
    }
    
]



module.exports = 
    websiteSources

