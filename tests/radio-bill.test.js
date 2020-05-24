describe("radio-bill unit test", function() {
  
    it("should return the total cost of added calls and sms's", function() {
        var calculateRadioBill = radioBill();
        calculateRadioBill.setCallCost(2.75);
        calculateRadioBill.setSmsCost(0.75);
        
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.sendSms();

      assert.equal(9, calculateRadioBill.getTotalCost());
      assert.equal(8.25, calculateRadioBill.getTotalCallCost());
      assert.equal(0.75, calculateRadioBill.getTotalSmsCost());
    });

    it("should return the total cost of added calls and sms's and alert warning", function() {
        var calculateRadioBill = radioBill();
        calculateRadioBill.setCallCost(2.75);
        calculateRadioBill.setSmsCost(0.75);

        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.sendSms();
        calculateRadioBill.sendSms();
        calculateRadioBill.sendSms();
        calculateRadioBill.sendSms();

      assert.equal(30.50, calculateRadioBill.getTotalCost());
      assert.equal(27.50, calculateRadioBill.getTotalCallCost());
      assert.equal(3.00, calculateRadioBill.getTotalSmsCost());
      assert.equal('warning', calculateRadioBill.alertColor());
    });

    it("should return the total cost of calls and sms's and alert critical", function() {

        var calculateRadioBill = radioBill();
        calculateRadioBill.setCallCost(2.75);
        calculateRadioBill.setSmsCost(0.75);
        
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.sendSms();
        calculateRadioBill.sendSms();
        calculateRadioBill.makeCall();
        calculateRadioBill.sendSms();
        calculateRadioBill.makeCall();
        calculateRadioBill.sendSms();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.sendSms();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();
        calculateRadioBill.makeCall();

      assert.equal(50.50, calculateRadioBill.getTotalCost());
      assert.equal(46.75, calculateRadioBill.getTotalCallCost());
      assert.equal(3.75, calculateRadioBill.getTotalSmsCost());
      assert.equal(50, calculateRadioBill.getCritLevel());
      assert.equal('critical', calculateRadioBill.alertColor());
    });
  });