'use strict'

let myBut = document.querySelector('button')
let userInput = document.querySelector('input')

myBut.addEventListener('click', getContent)

// function makeUrl() 


function getContent() {
    let queryUrl = '/search?q=' + userInput.value
    ajax('GET', queryUrl, displayContent)
}

function displayContent(list) {
    let tableHeader = `<table>
                        <tr>
                            <th>Licence plate</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Color</th>
                            <th>Year</th>
                        </tr>
                      </table>`
    let displayTable = document.createElement('table')
    displayTable.innerHTML = tableHeader
        list.forEach(function(plate){
        let displayElement = `<td>${plate.plate}</td>
                              <td>${plate.car_brand}</td>
                              <td>${plate.car_model}</td>
                              <td>${plate.color}</td>
                              <td>${plate.year}</td>`
        let displayRow = document.createElement('tr')
        displayRow.innerHTML = displayElement
        displayTable.appendChild(displayRow)
    })
    document.body.appendChild(displayTable)
}


