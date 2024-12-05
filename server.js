const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Go to the URL
  await page.goto('https://ipapi.co/json/');

  // Get the JSON response from the page
  const jsonResponse = await page.evaluate(() => {
    return JSON.parse(document.body.innerText); // Parse the JSON from the page's body
  });

  console.log(jsonResponse); // Output the JSON response

  // Close the browser
  await browser.close();
})();
