const billTypeRadio = document.querySelector(".billItemTypeRadio");
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
const callsTotalElemTwo = document.querySelector(".callTotalTwo");
const smsTotalElemTwo = document.querySelector(".smsTotalTwo");
const totalCostElemTwo = document.querySelector(".totalTwo");

   var callsT = 0;
   var smsT = 0;

function radioBillTotal(billItemType){
   
    if (billItemType === "call"){
        callsT += 2.75
    }
    else if (billItemType === "sms"){
        smsT += 0.75
    }
    var totalCostTwo= callsT + smsT;
  return totalCostTwo.toFixed(2);
  }

    
  function radioBillAddBtnClicked(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    var billItemType = checkedRadioBtn.value;
    const totalCostTwo = radioBillTotal(billItemType);
    callsTotalElemTwo.innerHTML = callsT.toFixed(2);
    smsTotalElemTwo.innerHTML = smsT.toFixed(2);
    totalCostElemTwo.innerHTML = totalCostTwo;
    
    if (totalCostTwo >= 50) {
    totalCostElemTwo.className = "danger";
    }
    else if (totalCostTwo >= 30) {
    totalCostElemTwo.className = "warning";
    }
}
radioBillAddBtn.addEventListener('click', radioBillAddBtnClicked);
