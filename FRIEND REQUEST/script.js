var btn = document.querySelector("button")
var change = document.querySelector("h1")

var flag = 0;

btn.addEventListener("click", () => {
    change.innerHTML = "REQUEST SENDING..."
    btn.textContent = "ADD FRIENDS"
    if(flag==0){
        setTimeout(function () {
            change.innerHTML = "FRIENDS"
            btn.style.color = "green"
            btn.textContent = "REMOVE"
        }, 2000)
        flag =1;
    }
    else{

        change.innerHTML = "STRANGER"
        btn.style.color = "red"
        flag=0;

    }
})  