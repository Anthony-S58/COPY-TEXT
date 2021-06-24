const buttonCopy = document.getElementById("button-copy") ;
buttonCopy.addEventListener("click", function() {
 

    document.querySelector('#copy-text').select();
    document.execCommand('copy');

});
