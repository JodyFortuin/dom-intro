function radioBill(){
    var theCallCost = 2.75;
    var theSmsCost = 0.75;
    var theWarnLevel = 30;
    var theCritLevel = 50;
    var callCostTotal = 0;
    var smsCostTotal = 0;

    function radioBillTotal(billItemType){
        if (getTotalCost() < theCritLevel){
        if (billItemType === "call"){
            radioFact.makeCall();
        }
        else if (billItemType === "sms"){
            radioFact.sendSms();
        }
        var totalCostTwo= radioFact.getTotalCallCost() + radioFact.getTotalSmsCost();
      return totalCostTwo.toFixed(2);
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

    function getWarnLevel(){
        return theWarnLevel;
    }
 
    function getCritLevel(){
        return theCritLevel;
    }

    function makeCall(){
        return callCostTotal += theCallCost;
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
        smsCostTotal += theSmsCost;
    }

    function alertColor(){
        if (getTotalCost() >= 50) {
            totalCostElemTwo.className = "danger";
            }
            else if (getTotalCost() >= 30) {
            totalCostElemTwo.className = "warning";
            }
        }

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        getTotal,
        getWarnLevel,
        getCritLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        alertColor,
        radioBillTotal,
    }
}

