let userName = document.querySelector('.textField');
let sendName = document.querySelector('.submitName');
let renderMsg = document.querySelector('.output')


let greets = 'Hello';



sendName.addEventListener('click', function(event) {
  renderMsg.innerHTML = greets+','+' '+userName.value;
})
