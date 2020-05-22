describe("text-bill unit test", function() {
  
    it("should return the cost for a string of calls and sms's", function() {
        var calculateTextBill = textBill();
        calculateTextBill.setCallCost(2.75)
        calculateTextBill.setSmsCost(0.75)
        

         calculateTextBill.makeCall();
         calculateTextBill.sendSms();
         calculateTextBill.makeCall();
         calculateTextBill.sendSms();
         calculateTextBill.sendSms();
         calculateTextBill.sendSms();

      assert.equal(8.50, calculateTextBill.getTotalCost());
      assert.equal(5.50, calculateTextBill.getTotalCallCost());
      assert.equal(3.00, calculateTextBill.getTotalSmsCost());
    });

    it("should return the cost for a string of calls and sms's and alert warning", function() {
        var calculateTextBill = textBill()
        calculateTextBill.setCallCost(2.75)
        calculateTextBill.setSmsCost(0.75)

         calculateTextBill.makeCall();
         calculateTextBill.sendSms();
         calculateTextBill.makeCall();
         calculateTextBill.makeCall();
         calculateTextBill.makeCall();
         calculateTextBill.makeCall();
         calculateTextBill.sendSms();
         calculateTextBill.makeCall();
         calculateTextBill.makeCall();
         calculateTextBill.sendSms();
         calculateTextBill.makeCall();

      assert.equal(24.25, calculateTextBill.getTotalCost());
      assert.equal(22.00, calculateTextBill.getTotalCallCost());
      assert.equal(2.25, calculateTextBill.getTotalSmsCost());
      assert.equal('warning', calculateTextBill.alertColor());
    });

    it("should return the cost for a string of calls and sms's and alert danger", function() {

        var calculateTextBill = textBill()
        calculateTextBill.setCallCost(2.75)
        calculateTextBill.setSmsCost(0.75)

         calculateTextBill.makeCall();
         calculateTextBill.makeCall();
         calculateTextBill.sendSms();
         calculateTextBill.makeCall();
         calculateTextBill.sendSms();
         calculateTextBill.makeCall();
         calculateTextBill.sendSms();
         calculateTextBill.makeCall();
         calculateTextBill.makeCall();
         calculateTextBill.makeCall();
         calculateTextBill.sendSms();
         calculateTextBill.makeCall();
         calculateTextBill.makeCall();
         calculateTextBill.makeCall();
         calculateTextBill.makeCall();

      assert.equal(33.25, calculateTextBill.getTotalCost());
      assert.equal(30.25, calculateTextBill.getTotalCallCost());
      assert.equal(3.00, calculateTextBill.getTotalSmsCost());
      assert.equal('danger', calculateTextBill.alertColor());
    });
  });