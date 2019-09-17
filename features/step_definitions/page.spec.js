var Page = require('../../page-objects/page')
const {Given, When, Then} = require('cucumber')

    Given('The user opens the page', async function() {
        var page = await Page()
        console.log(page)
        
    })
    Then('The page is returned', function() {
        console.log('teste spec')
    })