const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const websiteString = fs.readFileSync(path.join(__dirname, 'src', 'index.html'), 'utf-8');

const url = `https://nenino2.github.io/http-to-data-url/?data=${websiteString}`;

QRCode.toFile(path.join(__dirname, 'out', 'qrcode.png'), url);
