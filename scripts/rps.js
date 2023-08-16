function draw(){
    const canvas = document.getElementById('game-canvas');
    
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');    
        const X = Math.floor(Math.random() * 800);
        const Y = Math.floor(Math.random() * 600);
        ctx.font = '60px serif';
        ctx.fillText('Hello', 20, 40);
        for (let i = 0; i<6; i++){
            for (let j = 0; j < 6; j++){
                ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, 
                ${Math.floor(255 - 42.5 * j,)}, 0)`;
                ctx.fillRect(j * X, i * Y, 400, 400);
            }
        }
    }
}
window.addEventListener('load', draw);
const ranPosButton = document.querySelector('#randompos');
randomPosButton.addEventListener('click', draw);




