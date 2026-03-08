const https = require('https');

function fetchImages(url) {
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const imgRegex = /<img[^>]+src="([^">]+)"/g;
      const ogRegex = /<meta[^>]+property="og:image"[^>]+content="([^">]+)"/g;
      
      let match;
      console.log('--- Images from', url, '---');
      while ((match = ogRegex.exec(data)) !== null) {
        console.log('OG:', match[1]);
      }
      while ((match = imgRegex.exec(data)) !== null) {
        if (match[1].includes('codex') || match[1].includes('logo') || match[1].includes('app')) {
          console.log('IMG:', match[1]);
        }
      }
    });
  }).on('error', err => console.error(err));
}

fetchImages('https://9to5mac.com/2026/02/02/openai-launches-codex-app-for-macos-here-are-the-details/');
fetchImages('https://openai.com/index/introducing-the-codex-app/');
