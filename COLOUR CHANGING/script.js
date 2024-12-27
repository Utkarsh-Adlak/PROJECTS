var btns = document.querySelectorAll('button');
var body = document.querySelector('body');

btns.forEach(function(e){
    e.addEventListener('click',function(){
   body.style.backgroundColor = e.innerHTML
    }
    )
})