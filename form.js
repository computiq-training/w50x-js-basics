document.addEventListener('DOMContentLoaded', function(){
    let form = document.querySelector('form')
    form.onsubmit = function(e){
        e.preventDefault();
        let nameInput = document.getElementById('name')
        console.log(nameInput)
        alert(`Hello, ${nameInput.value}`);
        //return false;
    };

    
    console.log(form)
})