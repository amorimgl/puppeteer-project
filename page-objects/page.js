const puppeteer = require("puppeteer");

var Page = (async function () { 
    const browser = await puppeteer.launch({ headless: false , timeout: 60000})
    const page = await browser.newPage()
    await page.goto('https://google.com')
    await page.screenshot({path: 'google.co.uk.png'})
    await browser.close()
    return page
  })

module.exports = Page