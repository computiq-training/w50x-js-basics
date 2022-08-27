function blu(){
    alert('Mouse out of input');
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").onclick = toggle;
    function toggle() {
      //  get value of par
      let par = document.querySelector("p");
      console.log(par.innerHTML);

      if (par.innerHTML == "Hello!") {
        par.innerHTML = "Goodbye!";
      } else {
        par.innerHTML = "Hello!";
      }
    }


    // blue event
    

   
  });