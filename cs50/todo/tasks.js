document.addEventListener('DOMContentLoaded', function (){

  //defualt sumbmit button should be disabled
  document.querySelector('#submit').disable = true;

  document.querySelector('#task').onkeyup = () => {
    if (document.querySelector('#task').vaule.length > 0) {
      document.querySelector('#sumbit').disabled = false;
    } else {
      document.querySelector('#sumbit').disabled = true;
    }
   
  }

  document.querySelector('form').onsubmit = () => {
    const task =  document.querySelector('#task').value;
      const li = document.createElement('li');
      li.innerHTML = task;

      document.querySelector('#tasks').append(li);

      document.querySelector('#task').value = '';

      submit.disabled = true;

      //stop form from sumbitting
      return false;
  }
});