function draw(){
    const canvas = document.getElementById('game-canvas');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'black';
        ctx.fillRect(10,10,80,80);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(20,20,80,80);

        ctx.fillStyle = "rgba(10, 20, 100, 0.5)";
        ctx.fillRect(30,30,80,80)

        ctx.fillStyle = 'rgba(80, 20, 300, 0.5)';
        ctx.fillRect(40,40,80,80);

        ctx.beginPath();
        ctx.moveTo(60,60);
        ctx.lineTo(150,200);
        ctx.lineTo(200,250);
        ctx.fill();

        
    }
}
window.addEventListener('load', draw);

