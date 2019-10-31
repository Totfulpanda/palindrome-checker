
function palindrome() {
	let userInput = prompt("Type your word below......");

    let string = userInput.replace(/[^A-Za-z0-9]/ig, "").toLowerCase();
  
    let check = string.split('').reverse().join('');
    
    if(string != check) {
      alert('Not a palindrome');
    } else {
      alert('Yup a palindrome');
    } 
}

let btn = document.getElementById('btn');

btn.addEventListener('click', palindrome)
