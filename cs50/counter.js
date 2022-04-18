if (!localStorage.getItem('counter')) {
 localStorage.setItem('counter', 0);
}

function count() {
    let counter =localStorage.getItem('counter');
    counter ++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter);
}

//to use event listenres the first is what it is waiting  for the second argument tell what yo run
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;
});

