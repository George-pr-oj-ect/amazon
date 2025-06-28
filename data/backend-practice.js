const xhr = new XMLHttpRequest()// creates a new http message to send to the backend
xhr.addEventListener('load', () => {
  console.log(xhr.response)
});

//set it up
//it has 2 parameters one is the type of http request
//second is where to send the message.Uses an URL
xhr.open('GET', 'https://supersimplebackend.dev');
//send the message
xhr.send();
