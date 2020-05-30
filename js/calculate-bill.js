const calculateBtn = document.querySelector(".calculateBtn");

const phoneBill = document.querySelector(".billTotal");

const bill = document.querySelector(".billString");


var calculateFact = CalculateBill();

function totalPhoneBill(billString){
  
   var callLog = billString.split(',')
  for(var i=0; i < callLog.length; i++){

   var callAction = callLog[i].trim();
    if (callAction === 'call'){
       calculateFact.makeCall();
    } else if (callAction === 'sms'){
    calculateFact.sendSms();
  } 
  return calculateFact.getTotalCost().toFixed(2);
}
}
  
function calculateBtnClicked(){
    var billString = bill.value;
    const roundedPhoneBill = totalPhoneBill(billString);
    phoneBill.innerHTML = calculateFact.getTotalCost().toFixed(2);
    
    phoneBill.classList.remove("warning");
    phoneBill.classList.remove("danger");
  
    if (roundedPhoneBill >= 20 && roundedPhoneBill < 30) {
    phoneBill.classList.remove("danger");
    phoneBill.classList.add("warning");
}
else if (roundedPhoneBill >= 30) {
    phoneBill.classList.remove("warning");
    phoneBill.classList.add("danger");
}
}
calculateBtn.addEventListener('click', calculateBtnClicked);
