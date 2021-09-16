
      var n1 = document.getElementById("first");
      var n2 = document.getElementById("second");
      var result = document.getElementById("res");



document.getElementById("add").addEventListener("click",  function ( ) {
    result.value = parseInt(n1.value) + parseInt(n2.value);
})

document.getElementById("sub").addEventListener("click",  function ( ) {
   result.value = parseInt(n1.value) - parseInt(n2.value);
})

document.getElementById("mult").addEventListener("click",  function ( ) {
   result.value = parseInt(n1.value) * parseInt(n2.value);
})

document.getElementById("div").addEventListener("click",  function ( ) {
   result.value = parseInt(n1.value) / parseInt(n2.value);
})

document.getElementById("mud").addEventListener("click",  function ( ) {
   result.value = parseInt(n1.value) % parseInt(n2.value);
})


