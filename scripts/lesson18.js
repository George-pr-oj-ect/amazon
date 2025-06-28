/*
USING XHR

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://supersimplebackend.dev/greeting');
xhr.addEventListener('click', () => {
  console.log(xhr.response);
})
xhr.send();
*/


/*
USING FETCH 

fetch('https://supersimplebackend.dev/greeting').then((response) => {
  return response.text();
}).then((text) => {
  console.log(text)
})
  */


/*
USING ASYNC AWAIT
async function getGreeting() {
  const response = await fetch('https://supersimplebackend.dev/greeting');
  const text = await response.text();
  console.log(text);
}
getGreeting()
*/


/*USING ASYNC AWAIT AND FETCH TO POST DATA AND DISPLAY THE RESPONSE 
async function postGreeting() {
  const response = await fetch('https://supersimplebackend.dev/greeting', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: ' George'
    })
  })
  const text = await response.text();
  console.log(text);
}
postGreeting();
*/


/* ERROR HANDLING 
async function getAmazon() {
  try {
    const response = await fetch('https://amazon.com');
    const text = await response.text();
    console.log(text);
  } catch (error) {
    console.log('CORS error your request was blocked by the backend');
  }
}
getAmazon()
*/

/*
async function postGreeting() {
  try {
    const response = await fetch('https://supersimplebackend.dev/greeting',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({

        })
      })
    if (response.status >= 400) {
      throw response;
    }
    const text = await response.text();
    console.log(text);
  } catch (error) {
    if (error.status === 400) {
      const errorMessage = await error.json();
      console.log(errorMessage);
    } else {
      console.log('Network error please try again later');
    }
  }
}
postGreeting()
*/
