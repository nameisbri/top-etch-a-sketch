const gridContainer = document.querySelector('#grid-container');
const clearBtn = document.querySelector('button');

clearBtn.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    let input = prompt('How many boxes?');
    createGrid(input);

});


function createGrid(input) { 
    for (let i = 0; i < input; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        gridContainer.appendChild(row);
    
        for (let j = 0; j < input; j++) {
            const column = document.createElement('div');
            column.classList.add('grid-column');
            row.appendChild(column);
    
            column.addEventListener('mouseover', (e) => {
                e.target.classList.add('paint');
            })
    
            // column.addEventListener('mouseout', (e) => {
               // e.target.classList.add('clear');
            // })
        }
    
    };
    }
    