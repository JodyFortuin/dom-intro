--describe("bill with settings factory function", function() {
  
    it("should be able to set call cost", function() {
        var settingsBill = billWithSettings();

        settingsBill.setCallCost(1.50);
        assert.equal(1.50, settingsBill.getCallCost())

        var settingsBill2 = billWithSettings();

        settingsBill2.setCallCost(2.75);
        assert.equal(2.75, settingsBill2.getCallCost())
    });

    it("should be able to set sms cost", function() {
        var settingsBill = billWithSettings();

        settingsBill.setSmsCost(0.65);
        assert.equal(0.65, settingsBill.getSmsCost())

        var settingsBill2 = billWithSettings();

        settingsBill2.setSmsCost(0.75);
        assert.equal(0.75, settingsBill2.getSmsCost())
    });

    it("should be able to set sms and call cost", function() {
        var settingsBill = billWithSettings();

        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.75);
        assert.equal(2.75, settingsBill.getCallCost())
        assert.equal(0.75, settingsBill.getSmsCost())


        var settingsBill2 = billWithSettings();

        settingsBill2.setCallCost(3.00);
        settingsBill2.setSmsCost(0.90);
        assert.equal(3.00, settingsBill2.getCallCost())
        assert.equal(0.90, settingsBill2.getSmsCost())
    });

    it("should be able to set warning level", function() {
        var settingsBill = billWithSettings();

        settingsBill.setWarnLevel(20);
    
        assert.equal(20, settingsBill.getWarnLevel())

    });

    it("should be able to set critical level", function() {
        var settingsBill = billWithSettings();

        settingsBill.setCritLevel(30);
    
        assert.equal(30, settingsBill.getCritLevel())

    });

    it("should be able to set warning and critical level", function() {
        var settingsBill = billWithSettings();

        settingsBill.setWarnLevel(15);
        settingsBill.setCritLevel(25);
    
        assert.equal(15, settingsBill.getWarnLevel())
        assert.equal(25, settingsBill.getCritLevel())

    });


describe("Use values", function() {
  
    it("should be able to use call cost set", function() {

    var settingsBill = billWithSettings();

    settingsBill.setCallCost(2.50);
    settingsBill.setSmsCost(0.00);

    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();

    assert.equal(7.50, settingsBill.getTotalCost());
    assert.equal(7.50, settingsBill.getTotalCallCost());
    assert.equal(0.00, settingsBill.getTotalSmsCost());

    });
    
    it("should be able to use call cost set for 2 calls at 1.65 each", function() {

        var settingsBill = billWithSettings();
    
        settingsBill.setCallCost(1.65);
        settingsBill.setSmsCost(0.00);
    
        settingsBill.makeCall();
        settingsBill.makeCall();
    
        assert.equal(3.30, settingsBill.getTotalCost());
        assert.equal(3.30, settingsBill.getTotalCallCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost());
    
    });
        
    it("should be able to use sms cost set for 2 sms's at 0.65 each", function() {

        var settingsBill = billWithSettings();
        
        settingsBill.setCallCost(1.65);
        settingsBill.setSmsCost(0.65);
        
        settingsBill.sendSms();
        settingsBill.sendSms();
        
        assert.equal(1.30, settingsBill.getTotalCost());
        assert.equal(0.00, settingsBill.getTotalCallCost());
        assert.equal(1.30, settingsBill.getTotalSmsCost());
        
    });

    it("should be able to send 2 sms's at 0.65 each and make 1 call", function() {

        var settingsBill = billWithSettings();
        
        settingsBill.setCallCost(1.65);
        settingsBill.setSmsCost(0.65);
        
        settingsBill.sendSms();
        settingsBill.sendSms();
        settingsBill.makeCall();
        
        assert.equal(2.95, settingsBill.getTotalCost());
        assert.equal(1.65, settingsBill.getTotalCallCost());
        assert.equal(1.30, settingsBill.getTotalSmsCost());
        
    });

});
});