var billSettingsElem = document.querySelectorAll(".billItemTypeWithSettings");

const callTotalSet = document.querySelector(".callTotalSettings");
const smsTotalSet = document.querySelector(".smsTotalSettings");
const totalSet = document.querySelector(".totalSettings");

const callCostSet = document.querySelector(".callCostSetting");
const smsCostSet = document.querySelector(".smsCostSetting");

const warningSet = document.querySelector(".warningLevelSetting");
const criticalSet = document.querySelector(".criticalLevelSetting");
const updateSet = document.querySelector(".updateSettings");
const setAddBtn = document.querySelector(".addButton");

function update(){
var setCallCost = document.querySelector('callCostSet');
callCostSet.setAttribute('contenteditable', '34')

var setSmsCost = document.querySelector('smsCostSet');
smsCostSet.setAttribute('contenteditable', '7.35')

var setWarning = document.querySelector('warningSet');
warningSet.setAttribute('contenteditable', '30.00')

var setCritical = document.querySelector('criticalSet');
criticalSet.setAttribute('contenteditable', '65.00')
}

function setAddBtnClicked(){
    
    var checkedRadioBtnSet = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    var itemType = checkedRadioBtnSet
    var warning = warningSet.value;
    var danger = criticalSet.value;
    const totalCostThree = callTotalSet + smsTotalSet;
    callsTotalSet.innerHTML = callsTotalSet.toFixed(2);
    smsTotalSet.innerHTML = smsTotalSet.toFixed(2);
    totalSet.innerHTML = totalCostThree;
    
  
    if (totalCostThree >= warning && totalCostThree < danger) {
        totalSet.className = "warning";
    }
    else if (totalCostThree >= danger) {
        totalSet.className = "danger";
    }
       }

updateSet.addEventListener("click", update);
setAddBtn.addEventListener("click", setAddBtnClicked);
