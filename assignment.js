// #1: Multiplication Table //

// function createMulti(){
//     let input = Number(window.prompt("Select a number: "))
//     let table = document.getElementById("multiTable")
//     table.innerHTML = ""

//     let headerRow = document.createElement("tr")

//     let header1 = document.createElement("th")
//     header1.innerText = "Equation"

//     let header2 = document.createElement("th")
//     header2.innerText = "Result"

//     headerRow.appendChild(header1)
//     headerRow.appendChild(header2)
//     table.appendChild(headerRow)

//     for(let i=1; i<11; i++){
//         let row = document.createElement("tr")

//         let cell1 = document.createElement("tr")
//         cell1.innerText = `${input} * ${i} = ${input * i}`

//         let cell2 = document.createElement("td")
//         cell2.innerText = input * i

//         row.appendChild(cell1)
//         row.appendChild(cell2)
//         table.appendChild(row)
//     }
// }


// #2: Colors //

function whoClickedMe(thing){
    console.log(thing);
    console.log(thing.id);
    console.log(thing.attributes);
    console.log(thing.value);
}