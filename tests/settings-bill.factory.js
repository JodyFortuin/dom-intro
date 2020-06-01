function billWithSettings(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarnLevel = 0;
    var theCritLevel = 0;
    var callCostTotal = 0;
    var smsCostTotal = 0;

    function settingsPhoneBill(itemType){
        if (totalCostSettings < setCritical){
      
          if(itemType === "call"){  
            callCostTotal += setCallCost;
          }
            else if(itemType === "sms"){
              smsCostTotal += setSmsCost;
          }
          var  totalCostSettings = callCostTotal.toFixed(2) + smsCostTotal.toFixed(2);
          return totalCostSettings;
        }
      }

    function setCallCost(callCost){
        theCallCost = callCost;
    }
    function getCallCost(){
        return theCallCost    
    }

    function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }
    function getSmsCost(){
        return theSmsCost    
    }

    function getTotal(){
        return theCallCost + theSmsCost
    }

    function setWarnLevel(warnLevel){
        theWarnLevel = warnLevel;
    }
    function getWarnLevel(){
        return theWarnLevel;
    }
    
    function setCritLevel(critLevel){
        theCritLevel = critLevel;
    }
    function getCritLevel(){
        return theCritLevel;
    }

    function makeCall(){
        if (!criticalReached()) {
        callCostTotal += theCallCost;
        }
    }

    function getTotalCost(){
        return callCostTotal + smsCostTotal;
    }

    function getTotalCallCost(){
        return callCostTotal;
    }

    function getTotalSmsCost(){
        return smsCostTotal;
    }

    function sendSms(){
        if (!criticalReached()) {
        smsCostTotal += theSmsCost;
        }
    }

    function criticalReached(){
        return getTotalCost() >= getCritLevel();
    }

    function alertColor(){
        
            totalSetElem.classList.remove("warning");
            totalSetElem.classList.remove("danger");
            
            if (getTotalCost >= setWarnLevel() && getTotalCost < setCritLevel()) {
                totalSetElem.classList.remove("danger");
                totalSetElem.classList.add("warning");
            }
            else if (getTotalCost >= setCritLevel) {
                totalSetElem.classList.remove("warning");
                totalSetElem.classList.add("danger");
            }       
    }

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        getTotal,
        setWarnLevel,
        getWarnLevel,
        setCritLevel,
        getCritLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        criticalReached,
        alertColor,
        settingsPhoneBill,

    }
}

