import https from 'https';

function searchImages(query: string) {
  const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
  https.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }
  }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const imgRegex = /<img[^>]+src="([^">]+)"/g;
      let match;
      while ((match = imgRegex.exec(data)) !== null) {
        if (match[1].includes('//external-content.duckduckgo.com/iu/?u=')) {
          const actualUrl = decodeURIComponent(match[1].split('u=')[1].split('&')[0]);
          console.log('Found:', actualUrl);
        }
      }
    });
  });
}

searchImages('OpenAI Codex app icon transparent png');
