const puppeteer = require('puppeteer');
const delay = require('delay');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  });
  const page = await browser.newPage();
  await page.goto('http://test.local/sample-page/');

  await delay(5000);


  // Test 1: Verify that user can't login without password

  const btn = await page.$('.passster-submit');
  await btn.evaluate( btn => btn.click() );
  await delay(2000)

  // Test 2: Verify that user can't login with invalid password
  await page.type('input[name=passster_password]', 'tranthaao', {
    delay: 100
  })
  await delay(1000);
  await page.keyboard.press('Enter');
  await delay(2000)

  // Test 3: Verify that user can login with valid password
  await page.type('input[name=passster_password]', 'tranthao', {
    delay: 100
  })
  await delay(1000);
  await page.keyboard.press('Enter'); 
  //await browser.close();
})();