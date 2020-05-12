const billTypeTextE = document.querySelector(".billTypeText");
const addToBillBtn = document.querySelector(".addToBillBtn");
const callsTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalCostElem = document.querySelector(".totalOne");

   var callsTotal = 0;
   var smsTotal = 0;

function textBillTotal(billString){
   var billTypeEntered = billString.split(',');
   
  for(var i=0; i < billTypeEntered.length; i++){
    var callAction = billTypeEntered[i].trim();
    if (callAction === "call"){
        callsTotal += 2.75
    }
    else if (callAction === "sms"){
        smsTotal += 0.75
    }
    var totalCost= callsTotal + smsTotal;
  return totalCost.toFixed(2);
  }
}
   
  function addToBillBtnClicked(){
    var billString = billTypeTextE.value;
    const totalCost = textBillTotal(billString);
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    totalCostElem.innerHTML = totalCost;
    
    if (totalCost >= 30 && totalCost < 50) {
        totalCostElem.className = "warning";
    }
    else if (totalCost >= 50) {
        totalCostElem.className = "danger";
    }
}
addToBillBtn.addEventListener('click', addToBillBtnClicked);
