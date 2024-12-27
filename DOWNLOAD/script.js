var btn = document.querySelector("button");
var load = document.querySelector("#loader");
var h1 = document.querySelector("h1");

var grow = 0;


btn.addEventListener("click",()=>{
    console.log("clicked")
    var growInterval = setInterval(function(){
        grow++
        h1.innerHTML = grow + "%"
        load.style.width = grow + "%"
    },30)
    setTimeout(function(){
        clearInterval(growInterval)

        btn.innerHTML = "Downloaded"
        btn.style.opacity = 0.2
        btn.style.pointerEvents = "none";
    }, 3000)
})