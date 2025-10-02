// let paragraphs = document.body.getElementsByTagName("p");
// document.body.insertBefore(paragraphs[2], paragraphs[0]);
console.log("Hello World!")


// function changeOrder(){
//     let para = document.body.getElementsByTagName("p")
//     console.log(para)
//     document.body.insertBefore(para[2], para[0])
// }


// let btn = document.getElementById("btn");
// btn.remove();


// let p = document.createElement("p");
// p.innerHTML = "<strong>Four</strong>"
// document.getElementById("div").appendChild(p);


// let hed = document.createElement("h3")
// hed.innerText = "I replaced four"


// let btn = document.createElement("button")
// btn.innerText = "Replace Four"
// document.getElementById("div").appendChild(btn)


// btn.onclick = function replace(){
// let container = document.getElementById("div")
// let para = document.getElementById("four")
// container.replaceChild(hed, para)
// }


// let count = 0
// function repeat(){
//     let title = document.createElement("h3")
//     title.innerHTML = "Hi there! " + ++count
//     document.getElementById("div").appendChild(title)
// }


// function repeat(x){
//     console.log(x)
//     console.log(x.id)
//     console.log(x.attributes)
// }




// IMPORTANT FOR ASSIGNMENT


// function whoClickedMe(thing){
//     console.log(thing);
//     console.log(thing.id);
//     console.log(thing.attributes);
//     console.log(thing.value);
// }


function createMulti(){
    let input = Number(window.prompt("Select a number: "))
    for(let i=1; i<11; i++){
        let item = document.createElement("li")
        item.innerText = `${input} * ${i} = ${input * i}`
        document.getElementById("ul").appendChild(item)
    }
}