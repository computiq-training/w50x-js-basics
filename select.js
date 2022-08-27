document.addEventListener('DOMContentLoaded', function(){
    // Body, callback
    // Get select
    let sel = document.querySelector('select')
    let h1 = document.querySelector('h1')

    sel.onchange = function(){
        h1.style.color = this.value
    }
})