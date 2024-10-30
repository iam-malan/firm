const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'src', 'images', 'puffin.png');
const outputPath = path.join(__dirname, 'src', 'images', 'puffin-optimized.jpg');

sharp(inputPath)
    .resize(1920, 1080, {
        fit: 'cover',
        position: 'center'
    })
    .toFormat('jpeg', {
        quality: 80,
        progressive: true,
        optimizeScans: true,
        mozjpeg: true
    })
    .toFile(outputPath)
    .then(info => {
        console.log('Image optimized successfully:', info);
    })
    .catch(err => {
        console.error('Error optimizing image:', err);
    });
