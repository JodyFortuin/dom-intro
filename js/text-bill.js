var textFact = textBill();

const billTypeTextE = document.querySelector(".billTypeText");
const addToBillBtn = document.querySelector(".addToBillBtn");
const callsTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalCostElem = document.querySelector(".totalOne");


 
  function addToBillBtnClicked(){
    var billString = billTypeTextE.value;
    textFact.textBillTotal(billString);
    callsTotalElem.innerHTML = textFact.getTotalCallCost().toFixed(2);
    smsTotalElem.innerHTML = textFact.getTotalSmsCost().toFixed(2);
    totalCostElem.innerHTML = textFact.getTotalCost();
    textFact.alertColor();
    
}
addToBillBtn.addEventListener('click', addToBillBtnClicked);
