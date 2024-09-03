const images = [
    'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg',
    'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
    'https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRgYsHQ-lzleMza2DplwhClNuAd4w2G4DzLA&s',
    'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/10/bluebells,_oxfordshire.jpg?fit=1500%2C1000&ssl=1'
    
]
function generateRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageElement = document.getElementById('randomImage');
    imageElement.src = images[randomIndex];
}

window.onload = function() {
    generateRandomImage();
};

document.getElementById('generateButton').addEventListener('click', generateRandomImage);






