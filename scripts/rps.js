function draw(){
    const canvas = document.getElementById('game-canvas');
    
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'orange';
        beginPath();
        ctx.beginPath();
        ctx.moveTo(91,96);
    }
}
window.addEventListener('load', draw);
const ranPosButton = document.querySelector('#randompos');




