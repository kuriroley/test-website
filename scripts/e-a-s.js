const etchContainer = document.querySelector('.etch-container');
etchContainer.style.gridTemplateRows = `repeat(16,1fr)`;
etchContainer.style.gridTemplateColumns = `repeat(16,1fr)`;

for(let i = 0; i < 16 * 16; i++){


    const tile = document.createElement('div');
    etchContainer.appendChild(tile);
    tile.style.backgroundColor = 'white';
    tile.addEventListener('mouseover', ()=>{
        tile.style.backgroundColor = 'black';
    })

}







