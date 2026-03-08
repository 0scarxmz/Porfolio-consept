import https from 'https';

function checkUrl(url: string) {
  https.get(url, (res) => {
    console.log(url, res.statusCode, res.headers['content-type']);
  }).on('error', (e) => console.error(e));
}

checkUrl('https://www.google.com/s2/favicons?domain=antigravity.google&sz=256');
checkUrl('https://www.google.com/s2/favicons?domain=antigravity-ide.com&sz=256');
checkUrl('https://www.google.com/s2/favicons?domain=openai.com&sz=256');
checkUrl('https://www.google.com/s2/favicons?domain=chatgpt.com&sz=256');



