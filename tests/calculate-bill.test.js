describe("calculate-bill unit test", function() {
  
    it("should return the total cost of added calls and sms's", function() {
        var calculatePhoneBill = CalculateBill();
        calculatePhoneBill.setCallCost(2.75);
        calculatePhoneBill.setSmsCost(0.75);
        
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.sendSms();

      assert.equal(9, calculatePhoneBill.getTotalCost());
      assert.equal(8.25, calculatePhoneBill.getTotalCallCost());
      assert.equal(0.75, calculatePhoneBill.getTotalSmsCost());
    });

    it("should return the total cost of added calls and sms's and alert warning", function() {
        var calculatePhoneBill = CalculateBill()
        calculatePhoneBill.setCallCost(2.75);
        calculatePhoneBill.setSmsCost(0.75);

         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.sendSms();
         calculatePhoneBill.sendSms();

      assert.equal(20.75, calculatePhoneBill.getTotalCost());
      assert.equal(19.25, calculatePhoneBill.getTotalCallCost());
      assert.equal(1.50, calculatePhoneBill.getTotalSmsCost());
      assert.equal('warning', calculatePhoneBill.alertColor());
    });

    it("should return the total cost of calls and sms's and alert critical", function() {

        var calculatePhoneBill = CalculateBill()
        calculatePhoneBill.setCallCost(2.75);
        calculatePhoneBill.setSmsCost(0.75);

         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.sendSms();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.sendSms();
         calculatePhoneBill.sendSms();
         calculatePhoneBill.sendSms();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();

      assert.equal(30.50, calculatePhoneBill.getTotalCost());
      assert.equal(27.50, calculatePhoneBill.getTotalCallCost());
      assert.equal(3.00, calculatePhoneBill.getTotalSmsCost());
      assert.equal('critical', calculatePhoneBill.alertColor());
    });
  });