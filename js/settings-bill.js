var billSettingsElem = document.querySelectorAll(".billItemTypeWithSettings");

const callTotalSetElem = document.querySelector(".callTotalSettings");
const smsTotalSetElem = document.querySelector(".smsTotalSettings");
const totalSetElem = document.querySelector(".totalSettings");

const callCostSetElem = document.querySelector(".callCostSetting");
const smsCostSetElem = document.querySelector(".smsCostSetting");

const warningSetElem = document.querySelector(".warningLevelSetting");
const criticalSetElem = document.querySelector(".criticalLevelSetting");
const updateSetElem = document.querySelector(".updateSettings");
const setAddBtnElem = document.querySelector(".addButton");

var setCallCost = 0;
var setSmsCost = 0;
var setWarning = 0;
var setCritical = 0;

var callCostTotal = 0;
var smsCostTotal = 0;
var totalCostSettings = 0;
  
function update(){
  
 setCallCost = Number(callCostSetElem.value)
 setSmsCost = Number(smsCostSetElem.value)
 setWarning = Number(warningSetElem.value)
 setCritical = Number(criticalSetElem.value)
colorCode()
}

function setAddBtnClicked(){
   
  var checkedRadioBtnSet = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (totalCostSettings < setCritical){
  if (checkedRadioBtnSet){
  var itemType = checkedRadioBtnSet.value;
    
  if(itemType === "call"){  
    callCostTotal += setCallCost;
  }
    else if(itemType === "sms"){
      smsCostTotal += setSmsCost;
  }
  }
} 
    callTotalSetElem.innerHTML = callCostTotal.toFixed(2);
    smsTotalSetElem.innerHTML = smsCostTotal.toFixed(2);
    totalCostSettings = callCostTotal + smsCostTotal;
    colorCode()
    
    totalSetElem.innerHTML = totalCostSettings.toFixed(2);
}

  function colorCode(){
    totalSetElem.classList.remove("warning");
    totalSetElem.classList.remove("danger");
    
    if (totalCostSettings >= setWarning && totalCostSettings < setCritical) {
        totalSetElem.classList.remove("danger");
        totalSetElem.classList.add("warning");
    }
    else if (totalCostSettings >= setCritical) {
        totalSetElem.classList.remove("warning");
        totalSetElem.classList.add("danger");
    }
       
  }

updateSetElem.addEventListener("click", update);
setAddBtnElem.addEventListener("click", setAddBtnClicked);
