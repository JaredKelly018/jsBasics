let counter = 0;
function count() {
    counter ++;
    document.querySelector('h1').innerHTML = counter;

    if (counter % 10 === 0) {
        alert (`counter is now ${counter}`)
    }
}
//to use event listenres the first is what it is waiting  for the second argument tell what yo run
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').onclick = count;
});

