var button = document.getElementById("myBtn");

// button.addEventListener("mouseover", function (event){
//     alert("Hi!");
// })


var sayHi = function (event) {
    alert("Hi!");
}
button.addEventListener("mouseover",sayHi);