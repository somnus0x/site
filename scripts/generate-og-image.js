const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  
  const svgPath = path.join(__dirname, '../public/og-image.svg');
  const svgContent = fs.readFileSync(svgPath, 'utf8');
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;1,400&display=swap" rel="stylesheet">
        <style>
          body { margin: 0; padding: 0; }
        </style>
      </head>
      <body>${svgContent}</body>
    </html>
  `);
  
  await page.waitForTimeout(1000);
  
  const pngPath = path.join(__dirname, '../public/og-image.png');
  await page.screenshot({ path: pngPath, type: 'png' });
  
  await browser.close();
  console.log('OG image generated at public/og-image.png');
})();
