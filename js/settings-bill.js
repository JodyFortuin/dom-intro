var settingsFact = billWithSettings();
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
  
function update(){
  
 setCallCost = Number(callCostSetElem.value)
 setSmsCost = Number(smsCostSetElem.value)
 setWarning = Number(warningSetElem.value)
 setCritical = Number(criticalSetElem.value)
colorCode()
}



function setAddBtnClicked(){
   
  var checkedRadioBtnSet = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  var itemType = checkedRadioBtnSet.value;
  settingsFact.settingsPhoneBill(itemType);
    callTotalSetElem.innerHTML = settingsFact.getTotalCallCost.toFixed(2);
    smsTotalSetElem.innerHTML = settingsFact.getTotalSmsCost.toFixed(2);
    const totalCostSettings = settingsPhoneBill(itemType);
    alertColor()
    
    totalSetElem.innerHTML = settingsFact.getTotalCost().toFixed(2);
}


updateSetElem.addEventListener("click", update);
setAddBtnElem.addEventListener("click", setAddBtnClicked);
