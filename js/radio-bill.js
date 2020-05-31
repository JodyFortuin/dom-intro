var radioFact = radioBill();

const billTypeRadio = document.querySelector(".billItemTypeRadio");
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
const callsTotalElemTwo = document.querySelector(".callTotalTwo");
const smsTotalElemTwo = document.querySelector(".smsTotalTwo");
const totalCostElemTwo = document.querySelector(".totalTwo");


  function radioBillAddBtnClicked(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    var billItemType = checkedRadioBtn.value;
    radioFact.radioBillTotal(billItemType);
    callsTotalElemTwo.innerHTML = radioFact.getTotalCallCost().toFixed(2);
    smsTotalElemTwo.innerHTML = radioFact.getTotalSmsCost().toFixed(2);
    totalCostElemTwo.innerHTML = radioFact.getTotalCost();
    radioFact.alertColor();
   
}
radioBillAddBtn.addEventListener('click', radioBillAddBtnClicked);
