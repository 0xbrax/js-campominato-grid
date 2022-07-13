let gridContainer = document.getElementById('grid-container');
const gameMode = document.getElementById('game-mode');
const playBtn = document.getElementById('play-btn');

let gridSelection;

playBtn.addEventListener('click', 
function() {
    gridSelection = gameMode.value;
    console.log(gridSelection)

    gridContainer.innerHTML = '';

    for (let gridNumber = 1; gridNumber <= gridSelection; gridNumber++) {

        let grid = document.createElement('div');
        grid.append(gridNumber);
        grid.classList.add('grid-main');
        gridContainer.append(grid);
    
        grid.addEventListener('click', 
        function() {
            console.log(gridNumber);
    
            this.classList.toggle('grid-sec');
        });
    }

    let gridMain = document.querySelectorAll('.grid-main');
    const squareRoot = Math.sqrt(gridSelection);
    console.log(Math.sqrt(gridSelection));
    console.log(gridContainer.offsetHeight);

    const gridSize = ((gridContainer.offsetHeight - 2) / squareRoot);
    
    console.log(gridSize)


    for (let gridList = 0; gridList < gridMain.length; gridList++) {
        gridMain[gridList].style.width = gridSize + 'px';
        gridMain[gridList].style.height = gridSize + 'px';
    }
});