const abtBtn = document.getElementById("aboutBtn");

const myModal = document.getElementById("myModal");

const span = document.getElementsByClassName("close")[ 0 ];

// When the user clicks the button, open the modal 
abtBtn.onclick = function () {
    myModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    myModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == myModal) {
        myModal.style.display = "none";
    }
}