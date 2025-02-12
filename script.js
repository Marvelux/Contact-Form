
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const message = document.getElementById("message");
const button = document.querySelector("button");
const result = document.querySelector("#result");



button.addEventListener('click', () => { 
    result.innerHTML = `Congratulations!!! Your registered name is ${firstName.value} ${lastName.value}. ${message.value}`;
  });
  
  result.style.color = 'green';
  result.style.fontSize = '10px';
  result.style.fontWeight = 'bold';
  result.style.textAlign = 'center';
  result.style.marginTop = '5px';
  result.style.marginBottom = '5px';


  