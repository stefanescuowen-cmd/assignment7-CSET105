// #1: Multiplication Table //

function createMulti(){
    let input = Number(window.prompt("Select a number: "))
    let table = document.getElementById("MultiTable")
    table.innerHTML = ""

    for(let i=1; i<11; i++){
        let row = createElement("tr")

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

function whoClickedMe(thing){
    console.log(thing);
    console.log(thing.id);
    console.log(thing.attributes);
    console.log(thing.value);
}