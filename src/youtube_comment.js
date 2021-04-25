const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');

const canvas = createCanvas(540, 143);
const ctx = canvas.getContext('2d');

async function canvasC() {
    let image = await loadImage('../assets/template/youtube_comment.png');
    let avatar = await loadImage('../assets/images/avatar.jpg');

    registerFont('../assets/fonts/arial.ttf', { family: 'arial' });

    // Draw Image
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // YouTube Username
    ctx.font = '17px arial';
    ctx.fillStyle = 'Gray';
    ctx.fillText('Faiz', 110, 35);

    // YouTube Comment
    ctx.font = '18px arial';
    ctx.fillStyle = 'Black';
    ctx.fillText('Hello, this is fake youtube comment.', 110, 60);

    // Draw user avatar
    ctx.beginPath();
    ctx.lineWidth = '1';
    ctx.strokeStyle = '#FFFFFF';
    ctx.arc(54, 50, 30, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avatar, 20, 20, 67, 60);

    fs.promises.writeFile('../result/youtube_comment.png', canvas.toBuffer('image/png'));
}

canvasC();
