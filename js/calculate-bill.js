const calculateBtn = document.querySelector(".calculateBtn");
const phoneBill = document.querySelector(".billTotal");
const bill = document.querySelector(".billString");
function totalPhoneBill(billString){
   var callLog = billString.split(',')
   var billTotal = 0;
  for(var i=0; i < callLog.length; i++){
   var callAction = callLog[i].trim();
   if (billTotal < 30){
    if (callAction === 'call'){
       billTotal += 2.75;
    } else if (callAction === 'sms'){
    billTotal += 0.75;
  } 
   }
 } var roundedPhoneBill= billTotal.toFixed(2);
  return billTotal.toFixed(2);
  
}
   function alertColorChange(roundedPhoneBill){
if (roundedPhoneBill >= 20 && roundedPhoneBill < 30) {
    phoneBill.className = "warning";
}
else if (roundedPhoneBill >= 30) {
    phoneBill.className = "danger";
}
   }


function calculateBtnClicked(){
    var billString = bill.value;
    const roundedPhoneBill = totalPhoneBill(billString);
    phoneBill.innerHTML = roundedPhoneBill;
    alertColorChange(roundedPhoneBill);

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
