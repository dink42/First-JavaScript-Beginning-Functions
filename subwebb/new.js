function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

function myFunction() {
    document.getElementById('dem').innerHTML = 'You Clicked MEE';
    document.getElementById('dem').onclick = function() {myFunction()};
}
