function CalculateBill(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarnLevel = 20;
    var theCritLevel = 30;

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

    function total(){
        return theCallCost + theSmsCost
    }

    function getWarnLevel(warnLevel){
        theWarnLevel = warnLevel;
    }
    
    function getCritLevel(critLevel){
        theCritLevel = critLevel;
    }

    Return 
        setCallCost
        getCallCost
        setSmsCost
        getSmsCost
}
