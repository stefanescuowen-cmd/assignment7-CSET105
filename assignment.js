// #1: Multiplication Table //

function createMulti(){
    let input = Number(window.prompt("Select a number: "))
    for(let i=1; i<11; i++){
        let item = document.createElement("li")
        item.innerText = `${input} * ${i} = ${input * i}`
        document.getElementById("ul").appendChild(item)
    }
}


// #2: Colors //

function whoClickedMe(thing){
    console.log(thing);
    console.log(thing.id);
    console.log(thing.attributes);
    console.log(thing.value);
}