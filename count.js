
function count(){
    
    // Get value of par (counter)
    let counter = document.querySelector('p').innerHTML
    counter = parseInt(counter)
    counter += 2;
    document.querySelector('p').innerHTML = counter;
}

