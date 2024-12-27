var change = document.querySelector(".dabba");
var click = document.querySelector(".click");

click.addEventListener("click",()=>{

    var a1 = Math.floor(Math.random()*255);
    var a2 = Math.floor(Math.random()*255);
    var a3 = Math.floor(Math.random()*255);

    change.style.backgroundColor = `rgb(${a1},${a2},${a3})`
})
