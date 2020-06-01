function textBill(){
    var theCallCost = 2.75;
    var theSmsCost = 0.75;
    var theWarnLevel = 30;
    var theCritLevel = 50;
    var callCostTotal = 0;
    var smsCostTotal = 0;

    function textBillTotal(billString){
        var billTypeEntered = billString.split(',');
        
       for(var i=0; i < billTypeEntered.length; i++){
         var callAction = billTypeEntered[i].trim();
         if (getTotalCost() < theCritLevel){
         if (callAction === "call"){
             textFact.addCall();
         }
         else if (callAction === "sms"){
             textFact.addSms();
         }
         var totalCost= textFact.getTotalCallCost() + textFact.getTotalSmsCost();
       return totalCost.toFixed(2);
       }
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
        if (getTotalCost() >= 30 && getTotalCost() < 50) {
            totalCostElem.className = "warning";
        }
        else if (getTotalCost() >= 50) {
            totalCostElem.className = "danger";
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
        textBillTotal,
    }
}
