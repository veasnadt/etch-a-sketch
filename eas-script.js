const container = document.querySelector('#container');
const button = document.querySelector('#size-btn');
button.addEventListener('click', () => {
    let n = prompt('Enter the size of the grid (max 100)');
    if (n > 100) {
        alert('Size should be less than 100');
        return;
    }

    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < n; j++) {
            const div = document.createElement('div');
            div.className = 'square'
            row.appendChild(div);
        }
        container.appendChild(row);
    }
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            if (square.style.backgroundColor === '') {
                let randomRed = Math.floor(Math.random() * 256);
                let randomGreen = Math.floor(Math.random() * 256);
                let randomBlue = Math.floor(Math.random() * 256);
                square.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
            }
            
        });
    });
});