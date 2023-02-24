/* Global Variables */
const APILink = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const APIKey = '5a8852251f7506b2dc086a56bfadcb03';
const zipCode =  document.getElementById('zip');
const feel = document.getElementById('feelings');
const url = `${APILink}${zipCode.value}&appid=${APIKey}&units=metric`
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`;

document.getElementById('generate').addEventListener('click', getResult)
async function getResult() {
  getWeather(url)
  .then(function data() {
    postData(data)
    })
  .then(() => {
    updateUI();
  })
}

async function getWeather(url) {
  fetch(url)
  .then(function(res) {return res.json()}) // Convert data to json
  .then(function(data) {
    const temp = data['main']['temp'];
    console.log(temp);
    document.getElementById('temp').innerHTML = `Temp is ${temp}C`;
    return temp;
  })
  .catch(function(error) {
    if (temp.value === true) {
      postData(data);
    }
    else {
      document.getElementById('temp').innerHTML = `Zip Code is Wrong`;
      console.log('error'); // catch any errors
    }
  });
}

async function postData(data) {
  const request = await fetch('/add', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      date: newDate,
      temp: temp.value,
      feel: feel.value,
    }),
  })
  try{
    const result = request.json();
    console.log(result);
    return result;
  }
  catch(error) {
    console.log('error');
  }
}

async function updateUI(){
  const req = await fetch('/all')
  try {
    document.getElementById('date').innerHTML = `Date is ${newDate}`;
    document.getElementById('temp').innerHTML = `Temp is ${temp}C`;
    document.getElementById('content').innerHTML = `Feeling is ${feel.value}`;
  }
  catch(error) {
    console.log('error');
  }
}