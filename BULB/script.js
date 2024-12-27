let bulb = document.querySelector(".bulb");
 let button = document.querySelector("#toggle");

 flag  = 1;

 button.addEventListener("click", ()=> {
    if(flag==1){
        bulb.style.backgroundColor = "yellow"
        flag =0;
        button.textContent = "ON"
    }
 
 else if(flag==0){
    bulb.style.backgroundColor = "black"
    flag =1;
    button.textContent= "OFF"
 }
}
)
