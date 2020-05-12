const calculateBtn = document.querySelector(".calculateBtn");

const phoneBill = document.querySelector(".billTotal");

const bill = document.querySelector(".billString");

function totalPhoneBill(billString){
   var callLog = billString.split(', ')
   var billTotal = 0;
  for(var i=0; i < callLog.length; i++){

   var callAction = callLog[i].trim();
    if (callAction === 'call'){
       billTotal += 2.75;
    } else if (callAction === 'sms'){
    billTotal += 0.75;
  } 
 } var roundedPhoneBill= billTotal.toFixed(2);
  return billTotal.toFixed(2);
}
  
function calculateBtnClicked(){
    var billString = bill.value;
    const roundedPhoneBill = totalPhoneBill(billString);
    phoneBill.innerHTML = roundedPhoneBill;
  
    if (roundedPhoneBill >= 20 && roundedPhoneBill < 30) {
    phoneBill.className = "warning";
}
else if (roundedPhoneBill >= 30) {
    phoneBill.className = "danger";
}
}
calculateBtn.addEventListener('click', calculateBtnClicked);
