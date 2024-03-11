const cells = document.querySelectorAll('#data td:nth-child(7)');
let total = 0;
cells.forEach(cell => {
    const cellValue = parseInt(cell.textContent);
    if (!isNaN(cellValue)) {
        total += cellValue;
    }
});
document.getElementById('total').textContent = total;

const cells2 = document.querySelectorAll('#data td:nth-child(3)');
let total2 = 0;
cells2.forEach(cell => {
    const cellValue = parseInt(cell.textContent);
    if (!isNaN(cellValue)) {
        total2 += cellValue;
    }
});
document.getElementById('total2').textContent = total2;