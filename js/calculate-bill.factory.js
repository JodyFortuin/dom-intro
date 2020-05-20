function CalculateBill(){
    var theCallCost = 0;
    var theSmsCost = 0;

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

    Return 
        setCallCost
        getCallCost
        setSmsCost
        getSmsCost
}


