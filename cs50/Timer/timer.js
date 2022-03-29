
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#start').onclick = () => {
        document.querySelector('h1').innerHTML = setInterval (1000);
    }

});

