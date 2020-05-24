describe("text-bill unit test", function() {
  
    it("should return the cost for a string of calls and sms's", function() {
        var calculateTextBill = textBill();
        calculateTextBill.setCallCost(2.75);
        calculateTextBill.setSmsCost(0.75);
        

         calculateTextBill.addCall();
         calculateTextBill.addSms();
         calculateTextBill.addCall();
         calculateTextBill.addSms();
         calculateTextBill.addSms();
         calculateTextBill.addSms();

      assert.equal(8.50, calculateTextBill.getTotalCost());
      assert.equal(5.50, calculateTextBill.getTotalCallCost());
      assert.equal(3.00, calculateTextBill.getTotalSmsCost());
    });

    it("should return the cost for a string of calls and sms's and alert warning", function() {
        var calculateTextBill = textBill();
        calculateTextBill.setCallCost(2.75);
        calculateTextBill.setSmsCost(0.75);

         calculateTextBill.addCall();
         calculateTextBill.addSms();
         calculateTextBill.addCall();
         calculateTextBill.addCall();
         calculateTextBill.addCall();
         calculateTextBill.addCall();
         calculateTextBill.addSms();
         calculateTextBill.addCall();
         calculateTextBill.addCall();
         calculateTextBill.addSms();
         calculateTextBill.addCall();
         calculateTextBill.addCall();
         calculateTextBill.addCall();
         calculateTextBill.addCall();

      assert.equal(32.50, calculateTextBill.getTotalCost());
      assert.equal(30.25, calculateTextBill.getTotalCallCost());
      assert.equal(2.25, calculateTextBill.getTotalSmsCost());
      assert.equal('warning', calculateTextBill.alertColor());
    });

    it("should return the cost for a string of calls and sms's and alert critical", function() {

        var calculateTextBill = textBill();
        calculateTextBill.setCallCost(2.75);
        calculateTextBill.setSmsCost(0.75);

         calculateTextBill.addCall();
         calculateTextBill.addCall();
         calculateTextBill.addSms();
         calculateTextBill.addCall();
         calculateTextBill.addSms();
         calculateTextBill.addCall();
         calculateTextBill.addSms();
         calculateTextBill.addCall();
         calculateTextBill.addCall();
         calculateTextBill.addCall();
         calculateTextBill.addSms();
         calculateTextBill.addCall();
         calculateTextBill.addCall();
         calculateTextBill.addCall();
         calculateTextBill.addCall();
         calculateTextBill.addCall();
         calculateTextBill.addCall();
         calculateTextBill.addCall();
         calculateTextBill.addCall();
         calculateTextBill.addCall();
         calculateTextBill.addCall();
         calculateTextBill.addCall();

      assert.equal(52.50, calculateTextBill.getTotalCost());
      assert.equal(49.50, calculateTextBill.getTotalCallCost());
      assert.equal(3.00, calculateTextBill.getTotalSmsCost());
      assert.equal('critical', calculateTextBill.alertColor());
    });
  });