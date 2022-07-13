let gridContainer = document.getElementById('grid-container');

for (let i = 1; i <= 100; i++) {

    let grid = document.createElement('div');
    grid.append(i);
    grid.classList.add('grid-main');
    gridContainer.append(grid);

    grid.addEventListener('click', 
    function() {
        console.log(i);

        this.classList.toggle('grid-sec');
    });
}