const button = document.getElementById('myButton');
const updateButton = document.getElementById('updateButton')

button.addEventListener('click', function(e) {
  console.log('button was clicked');

  fetch('/clicked', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({click: 1})
    })
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
})

updateButton.addEventListener('click', function(e) {
  console.log('updateButton was clicked');
  fetch('/clicked/update', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "click": 1000000 })
    })
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
})