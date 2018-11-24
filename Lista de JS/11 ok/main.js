function addRow() {

    var table = document.getElementById("table");
    var numOfRows = table.rows.length;
    var numOfCols = table.rows[numOfRows-1].cells.length;

    var newRow = table.insertRow(numOfRows);

    for (var j = 0; j < numOfCols; j++) {
        newCell = newRow.insertCell(j);
        newCell.innerHTML = "Linha "+ numOfRows + " – Coluna "+ j;
    }

} 