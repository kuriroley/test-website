const etchContainer = document.getElementById('etch-container');

function tileGenerator(row, column){
    for (let i = 0; i < row ; i++){
        for (let j = 0; j < column; j++){
        const tile = document.createElement('div');
        tile.classList.add('tile');
        etchContainer.appendChild(tile);
        }
    }
}
tileGenerator(16,16);

