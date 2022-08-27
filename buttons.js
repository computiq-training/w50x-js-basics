document.addEventListener('DOMContentLoaded', ()=>{
    let btns = document.querySelectorAll('button')
    let helloH = document.querySelector('h1')
    console.log(btns)
    btns.forEach(changeColor)

    //  ES5
    function changeColor(btn){
        btn.onclick = (e)=>{
         console.log(e)
         helloH.style.backgroundColor = btn.dataset.color
        }
     }
     // ES6
     changeColor = btn => {
        btn.onclick = (e)=>{
         console.log(e)
         helloH.style.backgroundColor = btn.dataset.color
        }
     }

})