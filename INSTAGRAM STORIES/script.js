var arr = [{
    dp: 'https://images.unsplash.com/photo-1604684330644-25c4d8142c01?q=80&w=2554&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:'https://images.unsplash.com/photo-1734495912895-8e132ac15a49?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username:'KAALI LADIES'
},
{
    dp: 'https://images.unsplash.com/photo-1668387316381-b3a99d33d73f?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:'https://images.unsplash.com/photo-1734617049205-d5306cddf34b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username:'KALLU CHASMISH'
},
{
    dp: 'https://images.unsplash.com/photo-1570274552732-05212a4f75ef?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:'https://images.unsplash.com/photo-1569498693751-243598a86e01?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username:'CHACHA CHAUDHARY'
},
{
    dp: 'https://images.unsplash.com/photo-1610533289180-9d90161eba40?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:'https://images.unsplash.com/photo-1734495078257-b15bdc0fb0b5?q=80&w=2555&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username:'BACCHA MASOOM'
},
{
    dp: 'https://images.unsplash.com/photo-1589083133356-aa13ceaef7fd?q=80&w=2629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:'https://images.unsplash.com/photo-1734386011664-a17cc4ef6755?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username:'STREE'
},
{
    dp: 'https://images.unsplash.com/photo-1668387450400-4a9bbfadf25f?q=80&w=2706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:'https://images.unsplash.com/photo-1725714355442-4216013a29fd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username:'YO YO GANGSTER'
}
]

var sum = ''

arr.forEach(function(elem,idx){
    sum = sum + `<div id="story">
    <img id = "${idx}" src=${elem.dp} alt="">
</div>`
})

var stories = document.querySelector('#stories')
var full = document.querySelector('#full')
var fulluser = document.querySelector('#full h2')
var growth = document.querySelector('#growth')
stories.innerHTML = sum


stories.addEventListener('click',function(dets){
    var gold = arr[dets.target.id] 
    var grow = 0
    
    var int = setInterval(function(){
        grow++
    growth.style.width = grow + '%'
    },30)

    full.style.display = 'block'
    full.style.backgroundImage = `url(${gold.story})`
    fulluser.innerHTML = gold.username

    setTimeout(function(){
        full.style.display = 'none'
        clearInterval(int)
    },3000)
})
