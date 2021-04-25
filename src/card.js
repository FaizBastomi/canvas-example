const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');

async function card() {
    const canvas = createCanvas(450, 600);
    const ctx = canvas.getContext('2d');

    let template = await loadImage('../assets/template/card.jpg');
    let image = await loadImage('../assets/images/avatar.jpg');

    registerFont('../assets/fonts/Piazzolla-Regular.ttf', { family: 'piazola' });
    registerFont('../assets/fonts/CONSOLAB.TTF', { family: 'consolab' });

    // Draw Template
    ctx.drawImage(template, 0, 0, canvas.width, canvas.height);

    // Card Title
    ctx.font = '30px consolab';
    ctx.fillText('Kaguya-sama', 60, 75);

    // Card Description
    ctx.font = '15px piazola';
    ctx.fillText('This is example card.', 60, 461);

    // Draw Image
    ctx.drawImage(image, 71, 123, 310, 293);
    fs.promises.writeFile('../result/card.png', canvas.toBuffer('image/png'));
}

card();
