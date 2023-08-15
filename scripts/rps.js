function draw(){
    const canvas = document.getElementById('game-canvas');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        ctx.fillRect(25,25,100,100);
        ctx.clearRect(25,25,80,80);

        ctx.fillRect(25,250,100,100);
        ctx.clearRect(25,250,50,50);
        ctx.strokeRect(25,250,100,100);
        
    }
}
window.addEventListener('load', draw);

