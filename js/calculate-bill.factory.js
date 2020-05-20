function CalculateBill(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarnLevel = 0;
    var theCritLevel = 0;

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

    Return 
        setCallCost
        getCallCost
        setSmsCost
        getSmsCost
        getTotal
        setWarnLevel
        getWarnLevel
        setCritLevel
        getCritLevel
}

