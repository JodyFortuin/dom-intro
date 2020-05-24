function textBill(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarnLevel = 30;
    var theCritLevel = 50;
    var callCostTotal = 0;
    var smsCostTotal = 0;

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

    function addCall(){
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

    function addSms(){
        smsCostTotal += theSmsCost;
    }

    function alertColor(){
        if (getTotalCost() >= getCritLevel()) {
            return "critical";
            } 
        if (getTotalCost() >= getWarnLevel()) {
            return "warning";
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
        addCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        addSms,
        alertColor,
    }
}

