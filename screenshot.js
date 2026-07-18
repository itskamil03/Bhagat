const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport to mobile (iPhone X)
  await page.setViewport({ width: 375, height: 812, isMobile: true });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  // Take screenshot
  await page.screenshot({ path: 'C:/Users/kamil/.gemini/antigravity-ide/brain/b24599b3-ddfc-473d-97b1-ad4f9697a8d8/mobile_hero.png', fullPage: true });

  await browser.close();
  console.log('Screenshot saved to mobile_hero.png');
})();
