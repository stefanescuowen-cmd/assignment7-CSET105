// #1: Multiplication Table //

function createMulti(){
    let input = Number(window.prompt("Select a number: "))
    let table = document.getElementById("multiTable")
    table.innerHTML = ""

    let headerRow = document.createElement("tr")

    let header1 = document.createElement("th")
    header1.innerText = "Equation"

    let header2 = document.createElement("th")
    header2.innerText = "Result"

    headerRow.appendChild(header1)
    headerRow.appendChild(header2)
    table.appendChild(headerRow)

    for(let i=1; i<11; i++){
        let row = document.createElement("tr")

        let cell1 = document.createElement("tr")
        cell1.innerText = `${input} * ${i} = ${input * i}`

        let cell2 = document.createElement("td")
        cell2.innerText = input * i

        row.appendChild(cell1)
        row.appendChild(cell2)
        table.appendChild(row)
    }
}


// #2: Colors //

function getRandomColor(){
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

let buttons = []
let originalColors = []

for (let i=1; i <=10; i++){
    let btn = document.createElement("button")
    btn.innerText = "button" + i
    let color = getRandomColor()
    btn.style.backgroundColor = color
    buttons.push(btn)
    originalColors.push(color)
    document.getElementById("buttonContainer").appendChild(btn)
}

let colorSelector = document.getElementById("colorSelector");

colorSelector.addEventListener("change", function(){
    let selectedColor = this.value
    for (let i=0; i < buttons.length; i++){
        if (selectedColor === "red" || selectedColor === "green" || selectedColor === "blue"){
            buttons[i].style.backgroundColor = selectedColor
        }
            else if (selectedColor === "random"){
                buttons[i].style.backgroundColor = getRandomColor()
            }
            else if (selectedColor === "reset"){
                buttons[i].style.backgroundColor = originalColors[i]
            }
        }
})