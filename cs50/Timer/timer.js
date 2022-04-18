let counter = 0;

function count(){
    counter++;
    document.querySelector('h1').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#start').onclick = () => {
        document.querySelector('h1').onclick = count;
        setInterval(count, 1000);
    }
    document.querySelector('stop').onclick = setCounter (0);
    

});

